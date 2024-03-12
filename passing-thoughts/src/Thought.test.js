import React from "react";
import { Thought } from "./Thought.js";
import { App } from "./App.js";
import '@testing-library/jest-dom';

// Import render and screen here
import { render, screen } from '@testing-library/react';

it("Displays the Thought component", () => {
  // Pass to Thought component as thought prop
  const thought = { text: "learn react testing library" };
  // Add your testing logic here
  render(<Thought thought={thought} removeThought={() => {}} />);
  screen.debug();
  
});

it("Should have header text Passing Thoughts", () => {
  // Test App header text here
  render(<App />);
  const header = screen.queryByText('Passing Thoughts');
  expect(header).toHaveTextContent('Passing Thoughts');
});

it("Should have button enabled", () => {
  render(<Thought thought={{ text: "Hello" }} removeThought={() => {}} />);
  // Test status of button here
  const button = screen.getByRole('button');
  expect(button).toBeEnabled();
});

it('"Oreos are delicious" should not appear', () => {
  render(<App />);
  // Add testing logic here
  const emptyThought = screen.queryByText('Oreos are delicious');
  expect(emptyThought).toBeNull();
  
});