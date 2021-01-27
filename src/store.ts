import { createStore } from 'redux';
import { notesReducer } from './notesReducer';

// @ts-ignore
const store = createStore(notesReducer);

export default store;