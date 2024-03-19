// store.js

import { createStore } from 'redux';
import rootReducer from '../redux/reducers/Reducer';

const store = createStore(
  rootReducer,
  // You can optionally provide initial state here
);

export default store;
