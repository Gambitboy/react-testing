import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

test('renders app', () => {
  render(<App />);
  expect(screen.getByText('Container')).toBeInTheDocument();
  expect(screen.getByText('Container')).toHaveTextContent('Container');

  expect(screen.getByText('Outline')).toBeInTheDocument();
  expect(screen.getByText('Outline')).toHaveClass('button-outline');
  expect(screen.getByText('Outline')).toHaveTextContent('Outline');

  expect(screen.getByText('Text')).toBeInTheDocument();
  expect(screen.getByText('Text')).toHaveClass('button-text');
  expect(screen.getByText('Text')).toHaveTextContent('Text');
});
