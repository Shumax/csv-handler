import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Grid from '..'

jest.mock('..', () => {
  return {
    __esModule: true,
    default: jest.fn().mockReturnValue(<div><div data-testid="info-card">Info Card</div><div data-testid="info-card">Info Card</div></div>)
  }
})

describe('Grid Component', () => {
  it('Should render the grid component', () => {
    

    render(<Grid searchTerm="" />)

    const infoCards = screen.getAllByTestId('info-card');

    expect(infoCards).toHaveLength(2);
  })
})
