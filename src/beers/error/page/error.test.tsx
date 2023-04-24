import { render, screen } from '@testing-library/react';
import Error from './error';

describe('Given Error component', () => {
  describe('When it is render', () => {
    test('Then it should have the Error found in the screen', () => {
      render(<Error></Error>);
      const element = screen.getByText(/404/i);
      expect(element).toBeInTheDocument();
    });
  });
});
