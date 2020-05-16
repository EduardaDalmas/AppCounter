import React from 'react';
import Counter from './src/Counter';
import store from './src/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}


