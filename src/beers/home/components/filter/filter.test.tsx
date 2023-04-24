import { render, screen } from '@testing-library/react';
import FilterButtons from './filter';

describe('Given FilterButtons component', () => {
  describe('When it is render', () => {
    test('Then it should have the buttons in the screen', () => {
      render(<FilterButtons></FilterButtons>);
      const element = screen.getByText('Pale');
      expect(element).toBeInTheDocument();
    });
  });
});
