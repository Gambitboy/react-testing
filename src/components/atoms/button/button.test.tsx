import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './button';

describe('Atom - Button', () => {
  test('renders a button', () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('onClick trigger on button', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  test('button is enabled by default', () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole('button')).toBeEnabled();
  });

  test('button is disabled', () => {
    render(<Button isDisabled>Button</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('button is loading', () => {
    render(<Button isLoading>Button</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Loading');
  });
});
