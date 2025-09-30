import { render } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import { GifsApp } from './GifsApp';

describe('GifsApp', () => {
  test('should should render component properly', () => {
    const { container } = render(<GifsApp />);

    expect(container).toMatchSnapshot();
  });
});
