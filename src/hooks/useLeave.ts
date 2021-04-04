import {useCallback} from 'react'

import useGive from './useGive'
import {useWallet} from 'use-wallet'

import {leave, getXGiveStakingContract} from '../give/utils'

const useLeave = () => {
  const {account} = useWallet()
  const give = useGive()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXGiveStakingContract(give),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, give],
  )

  return {onLeave: handle}
}

export default useLeave
