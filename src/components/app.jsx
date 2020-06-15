import React from 'react';
import WelcomeScreen from './welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';

const App = ({appErrorCount}) => {
  return (
    <WelcomeScreen
      errorCount={appErrorCount}
    />
  );
};

App.propTypes = {
  appErrorCount: PropTypes.number.isRequired
};

export default App;
