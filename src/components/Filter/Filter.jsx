import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import comboDispatchFunc from "../../redux/contacts/contactsActions";
import styles from "./Filter.module.css";

const Filter = ({ filter, filterContact }) => {
  // console.log(filter);
  // console.log(filterContact);
  return (
    <div className={styles.filter_wrap}>
      <p className={styles.filter_title}>Find contacts by name</p>
      <input
        className={styles.filter_input}
        type="text"
        value={filter}
        onChange={filterContact}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterContact: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filter }) => {
  return (
    console.log(filter),
    {
      filter: filter,
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  filterContact: (event) => dispatch(comboDispatchFunc.filterContact(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
