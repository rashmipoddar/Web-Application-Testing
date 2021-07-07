import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Dashboard, { add } from './components/Dashboard';

test('dashboard renders without crashing', () => {
  render(<Dashboard />);
});

test('add function adds 1 to the current number', () => {
  let actual;
  let expected;
  actual = add(3);
  expected = 4;
  expect(actual).toBe(expected);
})

test('click on hit works', () => {
  const { getByText } = render(<Dashboard />);
  fireEvent.click(getByText('Hit'));

})