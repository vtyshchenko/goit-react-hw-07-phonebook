import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './contactsAction';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filterReduc = createReducer([], {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filterReduc,
});
