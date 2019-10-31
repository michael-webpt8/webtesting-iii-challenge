// Test away!
import React from 'react';
import { render, queryByText, findByText } from '@testing-library/react';
import Controls from './Controls';
import { fireEvent, act } from 'react-testing-library';

test('Controls renders correctly', () => {
	expect(render(<Controls />)).toMatchSnapshot();
});

test('Lock gate turns to unlock gate when fired', async () => {
	const { getByText } = render(<Controls />);
	const gate = getByText(/lock gate/i);

	act(() => {
		fireEvent.click(gate);
	});
	findByText(/unlock gate/i);
});
