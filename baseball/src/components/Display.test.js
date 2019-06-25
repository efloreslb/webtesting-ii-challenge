import React from 'react';
import { render, getByRole } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Display from './Display';
import { fireEvent } from '@testing-library/react/dist';

it('renders without crashing', () => {
   render(<Display />);
});

it('should display current strikes and balls', () => {
   const { getByTestId } = render(<Display />);
   
   const strikeDisplay = getByTestId('strikeTotal');
   const ballDisplay = getByTestId('ballTotal');

   expect(strikeDisplay).toBeInTheDocument();
   expect(ballDisplay).toBeInTheDocument();
})

it('should inc strike when strike button clicked', () => {
   const { getByTestId } = render(<Display />);

   const strikeButton = getByTestId('strikeButton');
   const strikeDisplay = getByTestId('strikeTotal')

   fireEvent.click(strikeButton);
   fireEvent.click(strikeButton);

   expect(strikeDisplay).toHaveTextContent('2');
})

it('should reset strike and ball display to 0 when ball reaches 4', () => {
   const { getByTestId } = render(<Display />);
   
   const ballButton = getByTestId('ballButton');
   const strikeDisplay = getByTestId('strikeTotal')
   const ballDisplay = getByTestId('ballTotal')

   fireEvent.click(ballButton);
   fireEvent.click(ballButton);
   fireEvent.click(ballButton);
   fireEvent.click(ballButton);

   expect(strikeDisplay).toHaveTextContent('0');
   expect(ballDisplay).toHaveTextContent('0');
})

it('should reset all counts to 0 when hit recorded', () => {
   const { getByTestId } = render(<Display />);

   const hitButton = getByTestId('hitButton');
   const strikeDisplay = getByTestId('strikeTotal')
   const ballDisplay = getByTestId('ballTotal')

   fireEvent.click(hitButton);

   expect(strikeDisplay).toHaveTextContent('0');
   expect(ballDisplay).toHaveTextContent('0');
})

it('should increase strike count to max 2 when foul clicked', () => {
   const { getByTestId } = render(<Display />);

   const foulButton = getByTestId('foulButton');
   const strikeDisplay = getByTestId('strikeTotal')

   fireEvent.click(foulButton);
   fireEvent.click(foulButton);
   fireEvent.click(foulButton);
   fireEvent.click(foulButton);

   expect(strikeDisplay).toHaveTextContent('2');
})
