import { useCallback } from 'react'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'
import { redeem } from '../give/utils'

const useRedeem = (daanamContract: Contract) => {
  const { account } = useWallet()

  const handleRedeem = useCallback(async () => {
    const txHash = await redeem(daanamContract, account)
    console.log(txHash)
    return txHash
  }, [account, daanamContract])

  return { onRedeem: handleRedeem }
}

export default useRedeem
