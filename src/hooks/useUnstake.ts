import { useCallback } from 'react'

import useGive from './useGive'
import { useWallet } from 'use-wallet'

import { unstake, getDaanamContract } from '../give/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const give = useGive()
  const daanamContract = getDaanamContract(give)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(daanamContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, give],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
