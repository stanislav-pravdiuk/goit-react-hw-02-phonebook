import React from "react";

const ContactList = ({ contacts, onDeleteContact }) => (
        <ul>
                {contacts.map((el) =>
                        <li key={el.id}>
                                <span>{el.name} {el.number}</span>
                                <button onClick={() => onDeleteContact(el.id)}>Delete</button>
                        </li>)}
        </ul>
)

export default ContactList;