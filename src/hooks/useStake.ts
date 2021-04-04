import { useCallback } from 'react'

import useGive from './useGive'
import { useWallet } from 'use-wallet'

import { stake, getDaanamContract } from '../give/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const give = useGive()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getDaanamContract(give),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, give],
  )

  return { onStake: handleStake }
}

export default useStake
