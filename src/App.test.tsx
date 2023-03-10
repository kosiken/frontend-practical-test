import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

global.IntersectionObserver =( class IntersectionObserver {

  observe() {
    return null;
  }

  disconnect() {
    return null;
  };

  unobserve() {
    return null;
  }
}) as any

describe('renders page', () => {
  it('should render the App without failing', () => {
      render(<App />);
      const  textElement = screen.getByText('Minimalist Room')
      expect(textElement).toBeInTheDocument();
  });
});
