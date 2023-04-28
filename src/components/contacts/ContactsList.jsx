import React from "react";
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
        <ul>
                {contacts.map((el) =>
                        <li key={el.id}>
                                <span>{el.name} {el.number}</span>
                                <button onClick={() => onDeleteContact(el.id)}>Delete</button>
                        </li>)}
        </ul>
);

ContactList.propTypes = {
        contacts: PropTypes.arrayOf(Object).isRequired,
        onDeleteContact: PropTypes.func.isRequired
}

export default ContactList;