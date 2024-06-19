import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from '../Filter';

describe('Filter Component', () => {
  it('Should render the filter component', () => {
    render(<Filter searchTerm="" setSearchTerm={jest.fn()} />)

    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  })
})

