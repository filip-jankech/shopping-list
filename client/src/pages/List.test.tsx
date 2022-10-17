import { List } from './List';
import { render } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';

describe('List', () => {
  it('renders properly', () => {
    render(
      <MemoryRouter initialEntries={['/123456']}>
        <Route path='/:listId'>
          <List />
        </Route>
      </MemoryRouter>
    );
  });
});