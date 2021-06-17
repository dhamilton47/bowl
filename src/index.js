import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme'

const AppWrapped = hot(module)(
  () => {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>        
      </ThemeProvider>
    )
  }
)

ReactDOM.render(
  <React.StrictMode>
    <AppWrapped />
  </React.StrictMode>,
  
  document.getElementById('root')
)