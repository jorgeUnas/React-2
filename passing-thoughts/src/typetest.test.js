import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const GreetingForm = () => {
  return(
    <form>
      <label htmlFor="greeting">
        Greeting:
      </label>
      <input type="text" id="greeting" />
      <input type="submit" value="Submit" />
    </form>
  );
};

it('should show text content as Hey Mack!', () => {
  // Render the component to test
  render(<GreetingForm />);
  // Extract the textbox component
  const textbox = screen.getByRole('textbox');
  // Simulate typing 'Hey Mack!'
  userEvent.type(textbox, 'Hey Mack!');
  // Assert textbox has text content 'Hey Mack!'
  expect(textbox).toHaveValue('Hey Mack!');
});