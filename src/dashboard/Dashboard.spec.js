// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

test('Renders display correctly', () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
});

// test('set Gate to Closed on close Gate Button Click', () => {
//   const setToggleLockedMock = jest.fn();
//   const {  } = render(
//     <Dashboard toggleLocked={setToggleLockedMock} />
//   );
//   const lockingButton = getByTestId('locking-feature');

//   fireEvent.click(lockingButton);
//   expect(setDisplayClosedToOpenMock).toHaveBeenCalled();
// });
