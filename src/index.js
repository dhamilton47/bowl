import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { hot } from 'react-hot-loader';
const AppWrapped = hot(module)(
  () => {
    return (
        <BrowserRouter>
          <App />
        </BrowserRouter>        
    )
  }
)

ReactDOM.render(
  <React.StrictMode>
    <AppWrapped />
  </React.StrictMode>,
  
  document.getElementById('root')
)