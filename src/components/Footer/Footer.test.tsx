import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('renders header', () => {
    it('renders footer without failing', () => {
        render(<Footer />);
    })
    it('renders the footer text', () => {
        render(<Footer />);
        const  textElement = screen.getByText('Follow us On')
        expect(textElement).toBeInTheDocument();
    })
});
