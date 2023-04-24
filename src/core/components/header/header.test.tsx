import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given Header component', () => {
  describe('When we are trying to render the component', () => {
    test('Then it should render the Header component in to the screen', () => {
      render(
        <Header>
          <></>
        </Header>
      );
      const element = screen.getByText("Beer's City");
      expect(element).toBeInTheDocument();
    });
  });
});
