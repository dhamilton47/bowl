import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

const App = hot(module)(
  () => {
    return (
      <div>
        Get message from backend
      </div>     
    )
  }
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
