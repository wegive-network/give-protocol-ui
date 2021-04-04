import { useCallback } from 'react'

import useGive from './useGive'
import { useWallet } from 'use-wallet'

import { harvest, getDaanamContract } from '../give/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const give = useGive()
  const daanamContract = getDaanamContract(give)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(daanamContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, give])

  return { onReward: handleReward }
}

export default useReward
