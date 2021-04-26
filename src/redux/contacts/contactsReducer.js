import { combineReducers } from "redux";

import { createReducer } from "@reduxjs/toolkit";

import {
  loadContactsRequest,
  loadContactsSuccess,
  loadContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContact,
} from "./contactsActions";

const contactsReducer = createReducer([], {
  [loadContactsSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loadingReducer = createReducer(false, {
  [loadContactsSuccess]: () => false,
  [loadContactsRequest]: () => true,
  [loadContactsError]: () => false,
  [addContactSuccess]: () => false,
  [addContactRequest]: () => true,
  [addContactError]: () => false,
  [deleteContactSuccess]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactError]: () => false,
});

const filterReducer = createReducer("", {
  [filterContact]: (state, { payload }) => payload,
});

export default combineReducers({
  contactsReducer,
  loadingReducer,
  filterReducer,
});

// import {
//   addContact,
//   deleteContact,
//   uploadContacts,
//   filterContact,
// } from "./contactsActions";
// const contacts = localStorage.getItem("contacts");
// const contactsItem = createReducer([], {
//   [addContact]: (state, { payload }) => {
//     console.log(payload);
//     return [...state, payload];
//   },
//   [uploadContacts]: (state, { payload }) => payload,
//   [deleteContact]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
// });

// const contactsFilter = createReducer("", {
//   [filterContact]: (state, { payload }) => payload,
// });

// const contactsReducer = combineReducers({
//   contacts: contactsItem,
//   filter: contactsFilter,
// });

// export { contactsReducer };
