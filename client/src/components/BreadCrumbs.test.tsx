import { BreadCrumbs } from './BreadCrumbs';
import { render, screen } from '@testing-library/react';

describe('BreadCrumbs', () => {
  it('renders properly', () => {
    render(<BreadCrumbs currentTitle="Seznam" />);
    const headings = screen.getAllByText(/Seznam/i);
    expect(headings.length).toEqual(2);
  });
});