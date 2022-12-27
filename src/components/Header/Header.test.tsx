import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

describe('renders header', () => {
    it('renders without failing', () => {
        render(<Header />);
    })
    it('renders the header link', () => {
        render(<Header />);
        const  linkElement = screen.getByText('Home')
        expect(linkElement).toBeInTheDocument();
    })
});
