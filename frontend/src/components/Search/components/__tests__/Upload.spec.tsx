import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Upload from '../Upload';

describe('Upload Component', () => {
  it('Should render the upload component', () => {
    render(<Upload />)

    expect(screen.getByTestId('upload-button')).toBeInTheDocument();
  })
})

