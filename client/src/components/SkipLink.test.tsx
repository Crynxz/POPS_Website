import { render, screen } from '@testing-library/react';
import SkipLink from './SkipLink';
import { describe, it, expect } from 'vitest';

describe('SkipLink', () => {
  it('renders skip link', () => {
    render(<SkipLink />);
    const link = screen.getByText(/Saltar para conteúdo principal/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#main-content');
  });
});
