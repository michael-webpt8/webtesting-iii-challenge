// Test away
import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Dashboard from './Dashboard';
import { queryByTestId } from 'react-testing-library';
import { notDeepEqual } from 'assert';

test('Renders display correctly', () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
});

// test('set Gate to Closed on close Gate Button Click', () => {
//   const setToggleClosedMock = jest.fn();
//   const { getByTestId } = render(
//     <Dashboard toggleLocked={setToggleClosedMock} />
//   );
//   const lockingButton = getByTestId('gate-feature');

//   fireEvent.click(lockingButton);
//   expect(setToggleClosedMock).toHaveBeenCalled();
// });

test('renders closed on click of close gate', async () => {
  // open message first
  // click button fire async operation
  // click button to fire async operation async/await
  // assert closed message is now on the DOM
  const { getByText, getByTestId } = render(<Dashboard />);

  const closedMessage = getByTestId('gate-feature');
  expect(closedMessage).not.toBeNull();

  const button = getByTestId('gate-feature');
  await fireEvent.click(button);

  expect(getByText(/closed/i));
});

test('renders Locked when locking gate after closing gate', async () => {
  const { getByText, getByTestId } = render(<Dashboard />);
  const toggleGate = getByTestId('gate-feature');
  const lockGate = getByTestId('locking-feature');

  const toggleGateButton = toggleGate;
  const lockGateButton = lockGate;

  fireEvent.click(toggleGateButton);
  expect(getByText(/closed/i));
  await fireEvent.click(lockGateButton);
  expect(getByText(/locked/i));
});
