import React from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

// import { v4 as uuidv4 } from "uuid";

import "./App.css";

export const App = () => {
  return (
    <div className="wrap">
      <div className="section">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
      </div>
      <div className="section">
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
// }

export default App;
