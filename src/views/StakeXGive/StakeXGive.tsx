import React, {useEffect, useMemo, useState} from 'react'
import styled from 'styled-components'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import Spacer from '../../components/Spacer'
import useGive from '../../hooks/useGive'
import {getContract} from '../../utils/erc20'
import UnstakeXGive from './components/UnstakeXGive'
import StakeGive from "./components/StakeGive";

import {contractAddresses} from '../../give/lib/constants'
import {getXGiveSupply} from "../../give/utils";
import BigNumber from "bignumber.js";
import {getBalanceNumber} from "../../utils/formatBalance";
import { CHAIN_ID } from '../../give/lib/constants'

const StakeXGive: React.FC = () => {
  const {
    tokenAddress,
  } = {
    tokenAddress: contractAddresses.xGive[CHAIN_ID],
  }

  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  const give = useGive()
  const {ethereum} = useWallet()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getXGiveSupply(give)
      setTotalSupply(supply)
    }
    if (give) {
      fetchTotalSupply()
    }
  }, [give, setTotalSupply])



  const lpContract = useMemo(() => {
    debugger
    return getContract(ethereum as provider, tokenAddress)
  }, [ethereum, tokenAddress])

  return (
    <>
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <UnstakeXGive
              lpContract={lpContract}
            />
          </StyledCardWrapper>
          <Spacer/>
          <StyledCardWrapper>
            <StakeGive
            />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <StyledInfo>
              ℹ️️ You will earn a portion of the swaps fees based on the amount
              of xGive held relative the weight of the staking. xGive can be minted
              by staking Give. To redeem Give staked plus swap fees convert xGive
              back to Give. {totalSupply ? `There are currently ${getBalanceNumber(totalSupply)} xGIVE in the whole pool.` : '' }
            </StyledInfo>
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
      </StyledFarm>
    </>
  )
}

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default StakeXGive
