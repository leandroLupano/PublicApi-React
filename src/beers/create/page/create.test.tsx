import { render, screen } from '@testing-library/react';
import Create from './create';

describe('Given Edit component', () => {
  describe('When it is render', () => {
    test('Then it should have the Add in the screen', () => {
      render(<Create></Create>);
      const element = screen.getByText('My Beers - Add your own beer');
      expect(element).toBeInTheDocument();
    });
  });
});
