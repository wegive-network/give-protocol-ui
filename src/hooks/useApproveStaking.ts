import {useCallback} from 'react'

import useGive from './useGive'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getGiveContract,
  getXGiveStakingContract
} from '../give/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const give = useGive()
  const lpContract = getGiveContract(give)
  const contract = getXGiveStakingContract(give)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
