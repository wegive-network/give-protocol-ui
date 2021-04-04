import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import useGive from './useGive'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'

import { getAllowance } from '../utils/erc20'
import { getDaanamContract } from '../give/utils'

const useAllowance = (lpContract: Contract) => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account }: { account: string; ethereum: provider } = useWallet()
  const give = useGive()
  const daanamContract = getDaanamContract(give)

  const fetchAllowance = useCallback(async () => {
    const allowance = await getAllowance(
      lpContract,
      account,
      daanamContract.options.address,
    )
    setAllowance(new BigNumber(allowance))
  }, [account, daanamContract, lpContract])

  useEffect(() => {
    if (account && daanamContract && lpContract) {
      fetchAllowance()
    }
    let refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, daanamContract, lpContract])

  return allowance
}

export default useAllowance
