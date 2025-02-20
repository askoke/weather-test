import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('Weather app tests', () => {
    it('renders weather application title', () => {
        render(<App />);
        const linkElement = screen.getByText(/Weather Application/i);
        expect(linkElement).toBeInTheDocument();
    });
});
