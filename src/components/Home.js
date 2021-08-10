import React from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { Redirect } from 'react-router-dom';
import { SpotifyAuth } from 'react-spotify-auth'

const Home = (props) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;
  const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
  ]

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&scopes=${scopes}&response_type=token&show_dialog=true`;
  };

  const { isValidSession, location } = props;
  const { state } = location;
  const sessionExpired = state && state.session_expired;

  return (

    <React.Fragment>
      {isValidSession() ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className="login">
          <Header />
          {sessionExpired && (
            <Alert variant="warning">Sessão Expirada. Logar novamente</Alert>
          )}
          <SpotifyAuth
            redirectUri='http://spotify.luby.com.br/redirect'
            clientID='6a4e0ca92464470b9de6cbc0b947a240'
            clientSecret='43b9b5edc7764fd59c9db9d6b52a1bfe'
            scopes={scopes}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default connect()(Home);
