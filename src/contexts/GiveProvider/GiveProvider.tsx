import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Give } from '../../give'

export interface GiveContext {
  give?: typeof Give
}

export const Context = createContext<GiveContext>({
  give: undefined,
})

declare global {
  interface Window {
    givesauce: any
  }
}

const GiveProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [give, setGive] = useState<any>()

  // @ts-ignore
  window.give = give
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const giveLib = new Give(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setGive(giveLib)
      window.givesauce = giveLib
    }
  }, [ethereum])

  return <Context.Provider value={{ give }}>{children}</Context.Provider>
}

export default GiveProvider
