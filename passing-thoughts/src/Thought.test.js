// This library is imported to enable async/await keywords in the Codecademy Code Editor
import "regenerator-runtime/runtime";
import React from "react";
import { Thought } from "./Thought.js";
import { AddThoughtForm } from "./AddThoughtForm.js";
import { App } from "./App.js";
import { waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// This library is imported to mimic user interactions (which you'll learn about next!)
import userEvent from "@testing-library/user-event";
// Import render and screen here

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

// testing the async function 

it("Should show new thought to be present", async () => {
  render(<App />);

  // The code below mimics a user posting a thought with text 'Oreos are delicious'
  const addThoughtInput = screen.getByRole("input");
  const addButton = screen.getByRole("submit");
  userEvent.type(addThoughtInput, "Oreos are delicious");
  userEvent.click(addButton);

  // Modify testing logic here
  const thought = await screen.findByText("Oreos are delicious");
  expect(thought).toBeInTheDocument();
});
