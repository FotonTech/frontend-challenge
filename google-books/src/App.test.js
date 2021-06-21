import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders search input', () => {
  render(<App />);
  const searchInput = screen.getByRole('textbox');
  expect(searchInput).toHaveValue('');
  fireEvent.change(searchInput,  {target: {value: 'Harry Potter'}});
  expect(searchInput).toHaveValue('Harry Potter');
});
