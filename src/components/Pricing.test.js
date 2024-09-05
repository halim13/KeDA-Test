import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import Pricing from './Pricing';

test('renders hero component', () => {
  const {getByText} = render(
    <MemoryRouter>
      <Pricing />
    </MemoryRouter>
  );

  expect(getByText(/Pricing/i)).toBeInTheDocument();
});
