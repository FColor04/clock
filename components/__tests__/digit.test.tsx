import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Digit from '../timeDisplay/digit';

describe('Digit', () => {
  it('Formats numbers like digital clock digit', () => {
    render(<Digit digit={0} />);
    expect(screen.getByText('00')).toBeInTheDocument();

    render(<Digit digit={10} />);
    expect(screen.getByText('10')).toBeInTheDocument();

    render(<Digit digit={1} length={3} />);
    expect(screen.getByText('001')).toBeInTheDocument();

    render(<Digit digit={10} length={3} />);
    expect(screen.getByText('010')).toBeInTheDocument();

    render(<Digit digit={100} length={3} />);
    expect(screen.getByText('100')).toBeInTheDocument();
  });
});
