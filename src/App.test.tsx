import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Half Stack application development/i);
  expect(headerElement).toBeInTheDocument();
});
