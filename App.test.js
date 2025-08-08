import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pancake title', () => {
  render(<App />);
  expect(screen.getByText('Pancake Paradise')).toBeInTheDocument();
});

test('shows pancake image with accessible label', () => {
  render(<App />);
  expect(screen.getByLabelText('Stack of pancakes with syrup')).toBeInTheDocument();
});
