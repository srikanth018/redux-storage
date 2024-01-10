// src/redux/store.js

import { createStore } from 'redux';
import clientReducer from './reducers';

const store = createStore(clientReducer);

export default store;
