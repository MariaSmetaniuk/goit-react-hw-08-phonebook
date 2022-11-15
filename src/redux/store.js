import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from 'redux/filter/filterSlice';
import { contactsReducer } from 'redux/contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
});
