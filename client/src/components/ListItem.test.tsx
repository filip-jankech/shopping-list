import { ListItem } from './ListItem';
import { render, screen } from '@testing-library/react';

describe('ListItem', () => {
  it('renders properly', () => {
    render(<ListItem id="" title="Seznam" remove={() => {}} />);
    const heading = screen.getByText(/Seznam/i);
    expect(heading).toBeInTheDocument();
  });
});