import React from 'react'
import { Home } from './styles'
import Left from '../../components/Left'
import Right from '../../components/Right'
import { SpotifyAuth } from 'react-spotify-auth'
import { useSelector } from 'react-redux'
import 'react-spotify-auth/dist/index.css'

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
]

export const Hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
}, {});

/*
  const AuthComponent = () => {
    const auth = useSelector((state) => hash)
    return ''
  }
*/

export const AuthComponent = () => {
  return (
    <SpotifyAuth
      redirectUri='http://45.77.80.227:3000'
      clientID='6a4e0ca92464470b9de6cbc0b947a240'
      clientSecret='43b9b5edc7764fd59c9db9d6b52a1bfe'
      scopes={scopes}
    />
  )
}

const HomePage: React.FC = () => {
  return (
    <Home>
      <Left />
      <Right />
      {AuthComponent()}
    </Home>
  )
}

export default HomePage
