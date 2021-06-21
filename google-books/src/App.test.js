import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const testingElement = screen.getByText(/testing application/i);
  expect(testingElement).toBeInTheDocument();
});
