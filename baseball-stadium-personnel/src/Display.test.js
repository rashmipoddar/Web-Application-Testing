import React from 'react';
import { render } from "@testing-library/react";
import Display from './components/Display';

test('display renders without crashing', () => {
  render(<Display />);
});

test('balls text is found', () => {
  const { getByText } = render(<Display />);
  getByText(/balls/i);
})

test('strikes testId attibute is found', () => {
  const { getByTestId } = render(<Display />);
  getByTestId(/strikes/i);
})
