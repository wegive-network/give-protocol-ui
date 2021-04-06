import React from 'react'
import './Home.css'
import { Button, makeStyles } from '@material-ui/core'
import logo from './wegive-logo.png'
import { useHistory } from 'react-router'
import { ReactComponent as GitHubLogo } from '../../assets/img/github.svg'
import { ReactComponent as RedditLogo } from '../../assets/img/reddit.svg'
import { ReactComponent as DiscordLogo } from '../../assets/img/discord.svg'
import { ReactComponent as TwitterLogo } from '../../assets/img/twitter.svg'
import { ReactComponent as BlockchainImage } from '../../assets/img/Tech_Life_Blockchain.svg'
import { ReactComponent as StarsImage } from '../../assets/img/stars.svg'

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
        <StarsImage />
      </div>
    </div>
  )
}

export default Home
