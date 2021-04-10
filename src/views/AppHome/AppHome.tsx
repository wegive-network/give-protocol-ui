import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/img/wegive-logo.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const AppHome: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={logo} height={0} />}
        title="Give by Saving your hard earned money!"
        subtitle="Stake Give LP tokens to claim your own Give token!"
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <StyledInfo>Scaling the social layer of Blockchains by giving</StyledInfo>
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="🔪 See the Menu" to="/farms" variant="secondary" />
      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default AppHome
