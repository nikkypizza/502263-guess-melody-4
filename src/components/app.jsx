import React from 'react';
import WelcomeScreen from './welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';

const App = ({appErrorCount, onWelcomeButtonClick}) => {
  return (
    <WelcomeScreen
      errorCount={appErrorCount}
      onWelcomeButtonClick={onWelcomeButtonClick}
    />
  );
};

App.propTypes = {
  appErrorCount: PropTypes.number.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired
};

export default App;
