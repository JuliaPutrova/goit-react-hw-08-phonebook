import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { filterContact } from './contact-actions';
import { fetchContact, addContact, deleteContact } from './contact-operation';

const items = createReducer([], {
  [fetchContact.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [action.payload, ...state],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const loading = createReducer(false, {
  [fetchContact.fulfilled]: () => false,
  [fetchContact.pending]: () => true,
  [fetchContact.rejected]: () => false,
  [addContact.fulfilled]: () => false,
  [addContact.pending]: () => true,
  [addContact.rejected]: () => false,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {});

const filter = createReducer('', {
  [filterContact]: (_, action) => action.payload,
});

const rootReducer = combineReducers({
  items,
  loading,
  error,
  filter,
});

export default rootReducer;
