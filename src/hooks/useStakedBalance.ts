import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getDaanamContract } from '../give/utils'
import useGive from './useGive'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const give = useGive()
  const daanamContract = getDaanamContract(give)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(daanamContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, give])

  useEffect(() => {
    if (account && give) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, give])

  return balance
}

export default useStakedBalance
