import {useCallback} from 'react'

import useGive from './useGive'
import {useWallet} from 'use-wallet'

import {enter, getXGiveStakingContract} from '../give/utils'

const useEnter = () => {
  const {account} = useWallet()
  const give = useGive()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXGiveStakingContract(give),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, give],
  )

  return {onEnter: handle}
}

export default useEnter
