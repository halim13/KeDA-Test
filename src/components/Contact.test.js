import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import Contact from './Contact';

test('renders contact component', () => {
  const {getByText} = render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );

  expect(getByText(/Contact/i)).toBeInTheDocument();
});
