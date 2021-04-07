import React from 'react'
import './Home.css'
import { Button, makeStyles } from '@material-ui/core'
import logo from '../../assets/img/wegive-logo.png'
import { useHistory } from 'react-router'
import { ReactComponent as GitHubLogo } from '../../assets/img/github.svg'
import { ReactComponent as RedditLogo } from '../../assets/img/reddit.svg'
import { ReactComponent as DiscordLogo } from '../../assets/img/discord.svg'
import { ReactComponent as TwitterLogo } from '../../assets/img/twitter.svg'
import { ReactComponent as BlockchainImage } from '../../assets/img/Tech_Life_Blockchain.svg'
import { ReactComponent as StarsImage } from '../../assets/img/stars.svg'
import { InfoCard } from './components/InfoCard'
const handsCoinImage = require('../../assets/img/hands_coin.png')
const graphImage = require('../../assets/img/allura_stats_graph.png')
const handsGiveImage = require('../../assets/img/hands_give.png')

const useStyles = makeStyles({
  button: {
    color: '#000',
    backgroundColor: '#aec5eb',
    '&:hover': {
      backgroundColor: '#aec5eb',
    },
  },
  navButton: {
    textTransform: 'unset',
    margin: '0.5em',
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: '2rem',
    height: 'fit-content',
    '&:hover': {
      backgroundColor: '#000',
    },
  },
})

const Home: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const socialLinks = {
    github: 'https://www.github.com',
    reddit: 'https://www.reddit.com',
    discord: 'https://www.discord.com',
    twitter: 'https://www.twitter.com',
  }
  const infoCardTexts = [
    'Connect a wallet and deposit your capital to a pool or vault',
    'Stake your coins and earn GIVE',
    'Vote to donate and support a cause you care about',
  ]

  return (
    <div className="App">
      <div className="grid__item grid__item_nav">
        <img
          src={logo}
          height="64"
          style={{ marginTop: -4, cursor: 'pointer' }}
          alt="logo"
        />
        <Button
          className={classes.navButton}
          variant="contained"
          color="primary"
          onClick={() => history.push('/about')}
        >
          About
        </Button>
        <Button
          className={classes.navButton}
          variant="contained"
          color="primary"
          onClick={() => history.push('/learn')}
        >
          Learn
        </Button>
        <Button
          className={classes.navButton}
          variant="contained"
          color="primary"
          onClick={() => history.push('/community')}
        >
          Community
        </Button>
      </div>
      <div className="grid__item grid__item_nav_btn">
        <Button
          className={classes.button}
          style={{ margin: '0.5em' }}
          variant="contained"
          color="primary"
          onClick={() => history.push('/app')}
        >
          Enter App
        </Button>
      </div>
      <div className="grid__item grid__item_item1">
        <h1>We give.</h1>
        <h3>Donate crypto to causes you care about</h3>
        <div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Learn more
          </Button>
        </div>
        <div className="social-logo-container">
          <GitHubLogo
            className="social-logo"
            onClick={() => (window.location.href = socialLinks.github)}
          />
          <RedditLogo
            className="social-logo"
            onClick={() => (window.location.href = socialLinks.reddit)}
          />
          <DiscordLogo
            className="social-logo"
            onClick={() => (window.location.href = socialLinks.discord)}
          />
          <TwitterLogo
            className="social-logo"
            onClick={() => (window.location.href = socialLinks.twitter)}
          />
        </div>
      </div>
      <div className="grid__item grid__item_item2">
        <BlockchainImage />
      </div>
      <div className="grid__item grid__item_item3">
        <StarsImage style={{ marginBottom: '-4px' }} />
      </div>
      <div className="grid__item grid__item_why">
        <h2>{'Why?'}</h2>
      </div>
      <div className="grid__item grid__item_why-card">
        <div className="why-card">
          <p>
            GIVE Protocol aims to bridge the gap between DeFi and charitable
            organizations by trustlessly allowing users to give their yields to
            nonprofits of their choice.
          </p>
          <p>
            The platform aims to empower existing users of DeFi to consider
            charitable donations as an integral aspect of their financial
            growth.
          </p>
          <p>
            GIVE Protocol will also focus on being a user-friendly bridge to
            existing philanthropy by connecting existing donors to the
            exceptional interest rates in DeFi.
          </p>
          <p>
            Through this initiative, GIVE Protocol firmly believes that it can
            onboard thousands of new DeFi participants through a lossless
            donation stream, without having to reduce their base capital.
          </p>
          <p>
            The give protocol team will be engineering and research focussed and
            work on the long term vision of building a more equitable world.
          </p>
        </div>
      </div>
      <div className="grid__item grid__item_how">
        <h2>{'How does it work?'}</h2>
      </div>
      <div className="grid__item grid__item_infocards">
        <InfoCard
          number={'1.'}
          title={infoCardTexts[0]}
          image={
            <img src={handsCoinImage} style={{ width: '75%' }} alt="coin" />
          }
        />
        <InfoCard
          number={'2.'}
          title={infoCardTexts[1]}
          image={<img src={graphImage} style={{ width: '75%' }} alt="graph" />}
        />
        <InfoCard
          number={'3.'}
          title={infoCardTexts[2]}
          image={
            <img
              src={handsGiveImage}
              style={{ width: '75%' }}
              alt="money-hand"
            />
          }
        />
      </div>
    </div>
  )
}

export default Home
