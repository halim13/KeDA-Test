import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import About from './About';

test('renders about component', () => {
  const {getByText} = render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

  expect(getByText(/Who We Are/i)).toBeInTheDocument();
});
