import { createSelector } from '@reduxjs/toolkit';
//contacts
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

//filter
export const selectFilter = state => state.filter;

// auth
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);

export const selectIsContacts = createSelector(
  [selectContacts],
  contacts => contacts.length > 0
);

export const selectIsContactsShown = createSelector(
  [selectIsContacts, selectFilteredContacts],
  (isContacts, filteredContacts) => isContacts && filteredContacts.length > 0
);
