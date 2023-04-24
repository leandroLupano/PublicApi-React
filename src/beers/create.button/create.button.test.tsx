import { render, screen } from '@testing-library/react';
import CreateButton from '../create.button/create.button';

describe('Given CreateButton component', () => {
  describe('When it is render', () => {
    test('Then it should have the button in the screen', () => {
      render(<CreateButton></CreateButton>);
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
