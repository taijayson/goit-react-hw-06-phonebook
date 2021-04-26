import { combineReducers } from "redux";

// import {
//   UPLOADCONTACTS,
//   ADDCONTACT,
//   FILTERCONTACT,
//   DELETECONTACT,
// } from "./contactsConstanse";
// import contactsBase from "../../data/contactBase.json";

// const contactsItem = (state = [], { type, payload }) => {
//   switch (type) {
//     case UPLOADCONTACTS:
//       return payload;

//     case ADDCONTACT:
//       // console.log(payload);
//       return [...state, payload];

//     case DELETECONTACT:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };
import { createReducer } from "@reduxjs/toolkit";

import {
  addContact,
  deleteContact,
  uploadContacts,
  filterContact,
} from "./contactsActions";
const contacts = localStorage.getItem("contacts");
const contactsItem = createReducer([], {
  [addContact]: (state, { payload }) => {
    console.log(payload);
    return [...state, payload];
  },
  [uploadContacts]: (state, { payload }) => payload,
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const contactsFilter = createReducer("", {
  [filterContact]: (state, { payload }) => payload,
});
//   switch (type) {
//     case FILTERCONTACT:
//       return payload;

//     default:
//       return state;
//   }
// };

const contactsReducer = combineReducers({
  contacts: contactsItem,
  filter: contactsFilter,
});

export { contactsReducer };
