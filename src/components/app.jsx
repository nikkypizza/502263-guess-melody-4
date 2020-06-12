import React from 'react';
import WelcomeScreen from './welcome-screen/welcome-screen.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {appErrorCount} = props;
  return (
    <WelcomeScreen
      errorCount={appErrorCount}
    />
  );
};

export default App;
