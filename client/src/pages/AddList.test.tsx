import { AddList } from './AddList';
import { render, screen } from '@testing-library/react';

describe('AddList', () => {
  it('renders properly', () => {
    render(<AddList />);
    const headings = screen.getAllByText(/Vytvoření nového seznamu/i);
    expect(headings.length).toEqual(2);
  });
});