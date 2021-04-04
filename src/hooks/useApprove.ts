import { useCallback } from 'react'

import useGive from './useGive'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'

import { approve, getDaanamContract } from '../give/utils'

const useApprove = (lpContract: Contract) => {
  const { account }: { account: string; ethereum: provider } = useWallet()
  const give = useGive()
  const daanamContract = getDaanamContract(give)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, daanamContract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, daanamContract])

  return { onApprove: handleApprove }
}

export default useApprove
