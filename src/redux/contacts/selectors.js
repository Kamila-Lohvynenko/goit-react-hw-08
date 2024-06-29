import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = store => store.contacts.items;
export const selectLoading = store => store.contacts.loading;
export const selectError = store => store.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectNameFilter, selectContacts],
  (filter, contacts) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
