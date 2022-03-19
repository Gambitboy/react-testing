import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

test('Renders app', () => {
  render(<App />);

  expect(screen.getByText('Notes')).toBeInTheDocument();
  expect(screen.getByLabelText('Note')).toBeInTheDocument();
  expect(screen.getByText('Create Note')).toBeInTheDocument();
  expect(screen.getByText('No notes yet.')).toBeInTheDocument();
});

test('Add a note', () => {
  render(<App />);

  const input = screen.getByLabelText('Note');
  const addButton = screen.getByRole('button');
  fireEvent.input(input, { target: { value: 'New Note' } });
  fireEvent.click(addButton);

  expect(screen.getByText('New Note')).toBeInTheDocument();
});

test('Remove a note', () => {
  render(<App />);

  const input = screen.getByLabelText('Note');
  const button = screen.getByRole('button');

  fireEvent.input(input, { target: { value: 'New Note' } });
  fireEvent.click(button);

  const removeButton = screen.getByText('Delete Note');
  fireEvent.click(removeButton);

  expect(screen.queryByText('New Note')).not.toBeInTheDocument();
});
