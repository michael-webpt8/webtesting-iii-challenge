// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';
import { cleanup } from 'react-testing-library';

afterEach(cleanup);

test.only('render Display correctly', () => {
  expect(render(<Display />).asFragment()).toMatchSnapshot();
});

test('starting state is ', () => {});

//TODO test('closed class is true : red-led && locked');

//TODO test('closed class is false: green-led && unlocked');

//TODO test('closed true: closed && unlocked');

//TODO test('closed true: closed and locked');
