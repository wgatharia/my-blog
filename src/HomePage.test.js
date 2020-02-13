import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './pages/HomePage';


test('renders welcome to blog', () => {
  const { getByText } = render(<HomePage />);
  const linkElement = getByText(/Welcome to my blog/i);
  expect(linkElement).toBeInTheDocument();
});
