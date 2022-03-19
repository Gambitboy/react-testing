import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './button';

describe('Atom - Button', () => {
  test('renders a button', () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('button-container');
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

  test('button has style and color is red', () => {
    render(<Button style={{ color: 'red' }}>Button</Button>);
    expect(screen.getByRole('button')).toHaveProperty('style');
    expect(screen.getByRole('button')).toHaveStyle({ color: 'red' });
  });

  test('button has className and its button', () => {
    render(<Button className="button">Button</Button>);
    expect(screen.getByRole('button')).toHaveProperty('className');
    expect(screen.getByRole('button')).toHaveClass('button');
  });

  test('button has container style', () => {
    render(<Button type="container">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('button-container');
  });

  test('button has outline style', () => {
    render(<Button type="outline">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('button-outline');
  });

  test('button has text style', () => {
    render(<Button type="text">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('button-text');
  });
});
