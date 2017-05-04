import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import requireGitHubLogin, { goToLogin } from './requireGitHubLogin';
import './index.css';

const render = el => {
  ReactDOM.render(el, document.getElementById('root'));
  document.getElementById('loading-indicator').className += 'loaded';
};

const REQUIRED_SCOPES = 'repo';

requireGitHubLogin({
  scope: REQUIRED_SCOPES,
  client_id: '5f5b3968f7732c6333da'
})
  .then(
    token => render(<App token={token}/>, root)
  )
  .catch(
    error => {
      render(
        <div style={{ width: '100vw', height: '100vh' }}
             className="display-flex align-items-center justify-content-center">
          <div className="text-center">
            <div className="alert alert-info">{error.message}</div>

            <div>
              <button className="btn btn-primary" onClick={e => {
                e.preventDefault();
                goToLogin({ scope: REQUIRED_SCOPES, client_id: '5f5b3968f7732c6333da' });
              }}><i className="fa fa-sign-in"/> log in
              </button>
            </div>
          </div>
        </div>
      );
    }
  );