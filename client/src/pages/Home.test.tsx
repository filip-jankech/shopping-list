import { Home } from './Home';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders properly', () => {
    render(<Home />);
    const heading = screen.getByText(/Nákupní seznamy/i);
    expect(heading).toBeInTheDocument();
  });
});