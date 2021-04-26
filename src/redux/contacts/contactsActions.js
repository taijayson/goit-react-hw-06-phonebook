// import { db } from "../../db/request";
import {
  UPLOADCONTACTS,
  ADDCONTACT,
  FILTERCONTACT,
  DELETECONTACT,
} from "./contactsConstanse";

import { combineReducers, createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// const uploadContacts = (contacts) => ({
//   type: UPLOADCONTACTS,
//   payload: contacts,
// });

export const uploadContacts = createAction(UPLOADCONTACTS);

// const addContact = (contact) => {
//   return {
//     type: ADDCONTACT,
//     payload: {
//       id: contact.id,
//       name: contact.name,
//       number: contact.number,
//     },
//   };
// };

export const addContact = createAction(ADDCONTACT, ({ name, number }) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));

// const filterContact = (value) => {
//   return {
//     type: FILTERCONTACT,
//     payload: value,
//   };
// };

export const filterContact = createAction(FILTERCONTACT, (event) => ({
  payload: event.target.value,
}));

// const deleteContact = (id) => {
//   return {
//     type: DELETECONTACT,
//     payload: id,
//   };
// };

export const deleteContact = createAction(DELETECONTACT);

const comboDispatchFunc = {
  uploadContacts,
  addContact,
  filterContact,
  deleteContact,
};

export default comboDispatchFunc;
