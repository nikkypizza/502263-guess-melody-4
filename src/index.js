import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

const ERROR_COUNT = 3;

ReactDOM.render(
    <App
      appErrorCount={ERROR_COUNT}
    />,
    document.getElementById(`root`)
);
