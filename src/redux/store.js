import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsReducer";

const store = configureStore({
  reducer: contactsReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
