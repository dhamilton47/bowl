import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <a
      href="127.0.0.1:8080/hello"
      target="_blank"
      rel="noopener noreferrer"
    >
      Get message from backend
    </a>
    <div>{/127.0.0.1:8080/hello}</div>
  </React.StrictMode>,
  document.getElementById('root')
);
