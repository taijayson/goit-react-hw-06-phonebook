import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactActions from "../../redux/contacts/contactsActions";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onRemoveContact, uploadContacts }) => {
  console.log(contacts);
  return (
    <ul className={styles.list}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li className={styles.item} key={id}>
            {name + " : " + number}
            <button
              className={styles.delete_btn}
              onClick={() => onRemoveContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// const mapStateToProps = (state) => {
//   const { contacts, filter } = state.contacts;
//   const normalizeFilter = filter.toLowerCase();
//   const getFilteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizeFilter)
//   );
//   return {
//     contacts: getFilteredContacts,
//   };
// };
// const mapStateToProps = ({ contacts, filter }) => {
//   const normalizeFilter = filter.toLowerCase();
//   const getFilteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizeFilter)
//   );
//   return {
//     contacts: getFilteredContacts,
//   };
//////==|or|==///////
// return {
//   contacts: contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   ),
// };
// };
// };

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  ),
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveContact: (contactId) =>
    dispatch(contactActions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
