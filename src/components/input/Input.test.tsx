import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Input } from './Input';

describe('Input', () => {
  it('renders with name and id', () => {
    render(<Input name="email" onChange={() => {}} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('name', 'email');
    expect(input).toHaveAttribute('id', 'email');
  });

  it('renders with custom type', () => {
    render(<Input name="pass" type="password" onChange={() => {}} />);
    expect(document.querySelector('input[type="password"]')).toBeInTheDocument();
  });

  it('renders placeholder', () => {
    render(<Input name="search" placeholder="Search..." onChange={() => {}} />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('calls onChange when typing', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Input name="text" onChange={onChange} />);

    await user.type(screen.getByRole('textbox'), 'hello');
    expect(onChange).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input name="disabled" disabled onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('renders prefix element', () => {
    render(<Input name="url" prefix={<span data-testid="prefix">@</span>} onChange={() => {}} />);
    expect(screen.getByTestId('prefix')).toBeInTheDocument();
  });

  it('renders suffix element', () => {
    render(<Input name="url" suffix={<span data-testid="suffix">.com</span>} onChange={() => {}} />);
    expect(screen.getByTestId('suffix')).toBeInTheDocument();
  });
});
