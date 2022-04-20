import { render, screen } from '@testing-library/react';
import Home from "./pages/Home";

test('renders', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Problem solver./i);
  expect(linkElement).toBeInTheDocument();
});
