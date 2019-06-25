import React from 'react';
import { render, getByRole } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

it('renders without crashing', () => {
  render(<Dashboard />);
});

it('renders 4 buttons', () => {
   const { getByText } = render(<Dashboard />)
   const strike = getByText(/add strike/i);
   const ball = getByText(/add ball/i);
   const hit = getByText(/add hit/i);
   const foul = getByText(/add foul/i);
   expect(strike).toBeInTheDocument();
   expect(ball).toBeInTheDocument();
   expect(hit).toBeInTheDocument();
   expect(foul).toBeInTheDocument();
});
