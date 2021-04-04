import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getDaanamContract } from '../give/utils'
import useGive from './useGive'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const give = useGive()
  const daanamContract = getDaanamContract(give)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(daanamContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, daanamContract, give])

  useEffect(() => {
    if (account && daanamContract && give) {
      fetchBalance()
    }
  }, [account, block, daanamContract, setBalance, give])

  return balance
}

export default useEarnings
