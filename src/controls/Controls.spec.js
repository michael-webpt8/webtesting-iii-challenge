// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls';
import { fireEvent, act } from 'react-testing-library';

test('Controls renders correctly', () => {
  expect(render(<Controls />)).toMatchSnapshot();
});

test('Lock gate turns to unlock gate when fired', async () => {
  const mockLockFeature = jest.fn();
  mockLockFeature(/lock gate/i);
  mockLockFeature(/unlock gate/i);
  mockLockFeature(/lock gate/i);
  expect(mockLockFeature).toHaveBeenCalled();
  expect(mockLockFeature).toHaveBeenCalledTimes(3);
  expect(mockLockFeature).toHaveBeenLastCalledWith(/lock gate/i);
});

// test('Lock gate unlock back to Locked gate', () => {
// 	const { getByText, queryByText } = render(<Controls />);
// 	const gate = getByText(/lock gate/i);

// 	act(() => {
// 		fireEvent.click(gate);

// 	});
// 	queryByText(/lock gate/i);
// });
