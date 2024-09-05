import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import Header from './Header';

test('renders navigation links', () => {
  const {getByText} = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(getByText(/Home/i)).toBeInTheDocument();
  expect(getByText(/About/i)).toBeInTheDocument();
  expect(getByText(/Pricing/i)).toBeInTheDocument();
  expect(getByText(/Contact/i)).toBeInTheDocument();
  expect(getByText(/Login/i)).toBeInTheDocument();
});
