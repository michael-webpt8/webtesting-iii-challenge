// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls';
import { fireEvent, act } from 'react-testing-library';

test('Controls renders correctly', () => {
	expect(render(<Controls />)).toMatchSnapshot();
});

test('Lock gate turns to unlock gate when fired', async () => {
	const { getByText, findByText } = render(<Controls />);
	const gate = getByText(/lock gate/i);

	fireEvent.click(gate);

	findByText(/unlock gate/i);
});

// test('Lock gate unlock back to Locked gate', () => {
// 	const { getByText, queryByText } = render(<Controls />);
// 	const gate = getByText(/lock gate/i);

// 	act(() => {
// 		fireEvent.click(gate);

// 	});
// 	queryByText(/lock gate/i);
// });
