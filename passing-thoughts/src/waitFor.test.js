import "regenerator-runtime/runtime";
import React from "react";
import "@testing-library/jest-dom";
import { waitFor, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


 const Header = () => {
 const handleClick = () => {
   setTimeout(() => {
     document.querySelector('h1').remove()
   }, 250);
 };
 return (
   <div>
     <h1>Hey Everybody</h1>
     <button onClick = {handleClick}>Remove Header</button>
   </div>
 );
};

it('should remove header display', async () => {
  // Render Header
  render(<Header/>)
  // Extract button node 
  const button = screen.getByRole('button');
  // click button
  userEvent.click(button);

  // Wait for the element to be removed asynchronously
  await waitFor(() => {
    const header = screen.queryByText('Hey Everybody');
    expect(header).toBeNull()
  })
});