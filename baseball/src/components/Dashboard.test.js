import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

it('renders without crashing', () => {
  render(<Dashboard />);
});

it('displays 4 buttons', () => {
   
});
