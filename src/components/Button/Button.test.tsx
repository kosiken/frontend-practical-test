import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';

describe('renders header', () => {
    it('renders button without failing', () => {
        render(<Button variant="primary" children="Hello" />);
    })
});
