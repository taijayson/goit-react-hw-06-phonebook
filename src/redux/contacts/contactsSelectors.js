import { createSelector } from "@reduxjs/toolkit";

const getAllContacts = (state) => state.contacts;

const getLoading = (state) => state.loading;

const getFilter = (state) => state.filter;

const getFilteredContacts = createSelector(
  [getFilter, getAllContacts],
  (filter, contacts) => {
    const normFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normFilter)
    );
  }
);

export { getAllContacts, getLoading, getFilter, getFilteredContacts };
