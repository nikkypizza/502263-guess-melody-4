import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

const ERROR_COUNT = 3;
const onBtnClick = function () {
  window.location.reload();
};

ReactDOM.render(
    <App
      appErrorCount={ERROR_COUNT}
      onWelcomeButtonClick={onBtnClick}
    />,
    document.getElementById(`root`)
);
