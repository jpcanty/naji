import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const misoElement = screen.getAllByAltText('miso')
  expect(misoElement).toBeTruthy();
});
