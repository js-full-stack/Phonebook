import { createSelector } from 'reselect';
const getFilter = state => state.contactsReducer.filter;

export const getCurrentContacts = state => state.contactsReducer.items;

export const getContactItemById = id =>
  createSelector([getCurrentContacts], contacts => {
    return contacts.find(contact => contact.id === id);
  });

export const getVisibleContacts = createSelector(
  [getCurrentContacts, getFilter],
  (items, filter) => {
    return items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  },
);
