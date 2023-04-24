import { render, screen } from '@testing-library/react';
import Edit from './edit';

describe('Given Edit component', () => {
  describe('When it is render', () => {
    test('Then it should have the Edit in the screen', () => {
      render(<Edit editBeer></Edit>);
      const element = screen.getByText(/My Beers - Edit/i);
      expect(element).toBeInTheDocument();
    });
  });
});
