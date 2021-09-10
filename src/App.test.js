import { render, screen } from '@testing-library/react';
import App from './App';

test('should render search input field', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Github user/);
  expect(input).toBeInTheDocument();
});

test('submit the form', () => {
  render(<App />);
  const linkElement = screen.getByTestId('submit');
  expect(linkElement).toBeInTheDocument();
});