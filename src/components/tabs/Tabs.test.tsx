import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Tabs } from './Tabs';

const items = [
  { key: 'tab1', label: 'First', content: <div>Content 1</div> },
  { key: 'tab2', label: 'Second', content: <div>Content 2</div> },
  { key: 'tab3', label: 'Third', content: <div>Content 3</div> },
];

describe('Tabs', () => {
  it('renders all tab buttons', () => {
    render(<Tabs items={items} />);
    expect(screen.getAllByRole('tab')).toHaveLength(3);
  });

  it('renders tablist', () => {
    render(<Tabs items={items} />);
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('shows first tab content by default', () => {
    render(<Tabs items={items} />);
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
  });

  it('shows specified default tab', () => {
    render(<Tabs items={items} defaultActiveKey="tab2" />);
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('switches tab on click', async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} />);

    await user.click(screen.getByRole('tab', { name: 'Second' }));
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('calls onChange when tab clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Tabs items={items} onChange={onChange} />);

    await user.click(screen.getByRole('tab', { name: 'Second' }));
    expect(onChange).toHaveBeenCalledWith('tab2');
  });

  it('marks active tab with aria-selected', () => {
    render(<Tabs items={items} />);
    expect(screen.getByRole('tab', { name: 'First' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('tab', { name: 'Second' })).toHaveAttribute(
      'aria-selected',
      'false',
    );
  });

  it('renders tabpanel', () => {
    render(<Tabs items={items} />);
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });
});
