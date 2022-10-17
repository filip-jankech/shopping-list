import { UpdateList } from './UpdateList';
import { render } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';

describe('UpdateList', () => {
  it('renders properly', () => {
    render (
      <MemoryRouter initialEntries={['/123456']}>
        <Route path='/:listId'>
          <UpdateList />
        </Route>
      </MemoryRouter>
    )
  });
});