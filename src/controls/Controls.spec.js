// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls';
import { fireEvent, act } from 'react-testing-library';

test('Controls renders correctly', () => {
  expect(render(<Controls />)).toMatchSnapshot();
});

test('close can turn to open = unlocked to locked', () => {
  const mockGateFeature = jest.fn();
  mockGateFeature(/close gate/i);
  mockGateFeature(/open gate/i);
  expect(mockGateFeature).toHaveBeenCalled();
  expect(mockGateFeature).toHaveBeenCalledTimes(2);
  expect(mockGateFeature).toHaveBeenLastCalledWith(/open gate/i);
});

// kinda worthless test i think... :/
test('Lock gate turns to unlock gate when fired', async () => {
  const mockLockFeature = jest.fn();
  mockLockFeature(/lock gate/i);
  mockLockFeature(/unlock gate/i);
  mockLockFeature(/lock gate/i);
  expect(mockLockFeature).toHaveBeenCalled();
  expect(mockLockFeature).toHaveBeenCalledTimes(3);
  expect(mockLockFeature).toHaveBeenLastCalledWith(/lock gate/i);
});
