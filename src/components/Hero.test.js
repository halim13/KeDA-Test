import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import Hero from './Hero';

test('renders hero component', () => {
  const {getByText} = render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );

  expect(getByText(/KeDA APP/i)).toBeInTheDocument();
});
