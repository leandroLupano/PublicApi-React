/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent, waitFor } from '@testing-library/react';
import { PrivateBeersContext } from '../context/private.beer.context';
import AddForm from './form';

describe('AddForm', () => {
  it('creates a new beer and shows a success message', async () => {
    const createBeer = jest.fn();
    const privateContext = {
      privateBeerList: [],
      loadPrivateBeer: jest.fn(),
      createBeer,
      deleteBeer: jest.fn(),
      editBeer: jest.fn(),
    };

    const { getByText, getByPlaceholderText } = render(
      <PrivateBeersContext.Provider value={privateContext}>
        <AddForm />
      </PrivateBeersContext.Provider>
    );

    const imageUrlInput = getByPlaceholderText('image');
    const nameInput = getByPlaceholderText('Name');
    const ibuInput = getByPlaceholderText('IBU');
    const abvInput = getByPlaceholderText('ABV');
    const typeInput = getByPlaceholderText('Type');
    const descriptionInput = getByPlaceholderText('Description');
    const submitButton = getByText('Create!');

    fireEvent.change(imageUrlInput, {
      target: { value: 'https://example.com' },
    });
    fireEvent.change(nameInput, { target: { value: 'Example Beer' } });
    fireEvent.change(ibuInput, { target: { value: '30' } });
    fireEvent.change(abvInput, { target: { value: '5.5' } });
    fireEvent.change(typeInput, { target: { value: 'IPA' } });
    fireEvent.change(descriptionInput, {
      target: { value: 'A delicious beer' },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(createBeer).toHaveBeenCalledWith({
        imageUrl: 'https://example.com',
        name: 'Example Beer',
        ibu: 30,
        abv: 5.5,
        type: 'IPA',
        description: 'A delicious beer',
      });

      expect(getByText('Beer added!')).toBeInTheDocument();
    });
  });
});
