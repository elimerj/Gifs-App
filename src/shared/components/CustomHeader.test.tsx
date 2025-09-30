import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
  const title = 'Test Title';
  const desc = 'Test Description';
  test('should render the title correctly', () => {
    render(<CustomHeader title={title} />);
    expect(screen.getByText(title)).toBeDefined();
  });

  test('should render the description when provided', () => {
    render(<CustomHeader title={title} description={desc} />);

    expect(screen.getByText(desc)).toBeDefined();
    expect(screen.getByRole('paragraph')).toBeDefined();
    expect(screen.getByRole('paragraph').innerHTML).toBe(desc);
  });

  test('should not render description when not provided', () => {
    const { container } = render(<CustomHeader title={title} />);
    screen.debug();
    const divElement = container.querySelector('.content-center');
    const h1 = divElement?.querySelector('h1');
    const p = divElement?.querySelector('p');
    expect(h1?.innerHTML).toBe(title);
    expect(p).toBeNull();
  });
});
