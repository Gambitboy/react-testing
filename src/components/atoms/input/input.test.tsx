import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from './input';

describe('Atom - Input', () => {
  test('renders a input', () => {
    render(<Input name="username" label="Username" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toHaveClass('input-container');
  });

  test('can input text', () => {
    render(<Input name="username" label="Username" />);
    const input = screen.getByLabelText('Username');

    expect(input).toBeInTheDocument();
    fireEvent.input(input, { target: { value: 'value' } });
    expect(input).toHaveValue('value');
  });

  test('input has predefined value', () => {
    render(<Input name="username" label="Username" value="value" />);
    const input = screen.getByLabelText('Username');

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('value');
  });
});
