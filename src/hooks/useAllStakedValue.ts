import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getDaanamContract,
  getWethContract,
  getFarms,
  getTotalLPWethValue,
} from '../give/utils'
import useGive from './useGive'
import useBlock from './useBlock'

export interface StakedValue {
  tokenAmount: BigNumber
  wethAmount: BigNumber
  totalWethValue: BigNumber
  tokenPriceInWeth: BigNumber
  poolWeight: BigNumber
}

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const give = useGive()
  const farms = getFarms(give)
  const daanamContract = getDaanamContract(give)
  const wethContact = getWethContract(give)
  const block = useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
        }) =>
          getTotalLPWethValue(
            daanamContract,
            wethContact,
            lpContract,
            tokenContract,
            pid,
          ),
      ),
    )

    setBalance(balances)
  }, [account, daanamContract, give])

  useEffect(() => {
    if (account && daanamContract && give) {
      fetchAllStakedValue()
    }
  }, [account, block, daanamContract, setBalance, give])

  return balances
}

export default useAllStakedValue
