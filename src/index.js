import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import requireGitHubLogin from './requireGitHubLogin';
import './index.css';

requireGitHubLogin({
  scope: 'gist',
  client_id: '5f5b3968f7732c6333da'
}).then(
  token => {
    ReactDOM.render(
      <App token={token}/>,
      document.getElementById('root')
    );
  }
);