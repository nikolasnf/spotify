import React from 'react'
import { Home } from './styles'
import Left from '../../components/Left'
import Right from '../../components/Right'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import Cookies from 'js-cookie'
import 'react-spotify-auth/dist/index.css'

const token = Cookies.get('spotifyAuthToken')

const HomePage: React.FC = () => {
  console.log(token)
  return (
    <Home>
      <Left />
      <Right />
      <SpotifyAuth
        redirectUri='http://45.77.80.227:3001/'
        clientID='6a4e0ca92464470b9de6cbc0b947a240'
        clientSecret='43b9b5edc7764fd59c9db9d6b52a1bfe'
        scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
      />
    </Home>
  )
}

export default HomePage
