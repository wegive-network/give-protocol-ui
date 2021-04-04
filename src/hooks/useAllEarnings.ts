import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getDaanamContract, getFarms } from '../give/utils'
import useGive from './useGive'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const give = useGive()
  const farms = getFarms(give)
  const daanamContract = getDaanamContract(give)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(daanamContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, daanamContract, give])

  useEffect(() => {
    if (account && daanamContract && give) {
      fetchAllBalances()
    }
  }, [account, block, daanamContract, setBalance, give])

  return balances
}

export default useAllEarnings
