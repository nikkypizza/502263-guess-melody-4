import React from 'react';
import renderer from 'react-test-renderer';
import checkPropTypes from 'check-prop-types';
import WelcomeScreen from './welcome-screen.jsx';

const mockErrorCount = 10;
const mockFn = () => `hello`;
const badProps = [{error: 100}, {errorCount: `100`}, {errorCount: false, onWelcomeButtonClick: 2}, {errorCoun: {}}];

describe(`WelcomeScreen Component`, () => {
  it(`Renders`, () => {
    const tree = renderer.create(
        <WelcomeScreen
          errorCount = {mockErrorCount}
          onWelcomeButtonClick = {mockFn}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should throw PropTypes warning on bad input`, () => {
    badProps.forEach((it) => {
      const propsErr = checkPropTypes(WelcomeScreen.propTypes, it, `props`, WelcomeScreen.name);
      expect(propsErr).toEqual(expect.stringContaining(`Failed props type`));
    });
  });
});
