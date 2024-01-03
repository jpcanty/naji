import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('App test', () => {
  const initialState = {currentUser:{value:undefined}}
  const mockStore = configureStore()
  let store,wrapper

  it('Shows miso', () => {
    store = mockStore(initialState)
    // const { getByText } = render(<Provider store={store}><App /></Provider>)
    // expect(getByText('Hello Worldd!')).not.toBeNull()
    render(<Provider store={store}><App /></Provider>);
    const misoElement = screen.getAllByAltText('miso')
    expect(misoElement).toBeTruthy();
  })
})

