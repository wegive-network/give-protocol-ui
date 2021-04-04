import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useGive from '../../hooks/useGive'

import { bnToDec } from '../../utils'
import { getDaanamContract, getEarned } from '../../give/utils'
import { getFarms } from '../../give/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const give = useGive()
  const { account } = useWallet()

  const farms = getFarms(give)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
