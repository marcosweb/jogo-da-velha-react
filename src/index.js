import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Reducers } from './reducers';
import Game from './components/Game';
import './index.css';

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
//       && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
