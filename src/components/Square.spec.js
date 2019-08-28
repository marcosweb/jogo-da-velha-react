import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'

import Square from './Square';
import squareReducer, { init } from '../reducers/squareReducer';

const initialState = init();
const store = createStore(squareReducer, initialState);

function renderWithRedux(ui) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  }
}

test('can render with redux with defaults', () => {
  const { getByTestId, getByText } = renderWithRedux(<Square />);
  fireEvent.click(getByTestId('square-1'));
  expect(getByTestId('square-1').textContent).toBe('X')
})

