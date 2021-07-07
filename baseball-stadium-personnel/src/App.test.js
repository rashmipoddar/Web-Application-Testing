import React from 'react';
import { render } from "@testing-library/react";
import App from './App';

it('app renders without crashing', () => {
  render(<App />);
  
});
