import { render, screen } from '@testing-library/react';
import { Menu } from './menu';
import { MenuOption } from '../app/App';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given Menu component', () => {
  describe('When we are trying to render the component', () => {
    test('Then it should render the Menu component in to the Header component', () => {
      const mockOptions: MenuOption[] = [
        {
          label: 'test',
          path: '/test',
        },
      ];
      render(
        <Router>
          <Menu menuOptions={mockOptions}></Menu>
        </Router>
      );

      const element = screen.getByText(mockOptions[0].label);
      expect(element).toBeInTheDocument();
    });
  });
});
