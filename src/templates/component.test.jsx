import React from 'react';
import { render } from '@testing-library/react';
import ComponentName from './ComponentName';

test('renders ComponentName component', () => {
  const { getByText } = render(<ComponentName />);
  expect(getByText('Hello, ComponentName!')).toBeInTheDocument();
});
