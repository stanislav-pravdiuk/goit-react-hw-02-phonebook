import React, { Component } from "react";
import ContactList from "./contacts/ContactsList";
import initialContacts from '../components/contacts/contacts.json'
import ContactForm from "./phonebook/ContactForm";
import { nanoid } from 'nanoid'
import Filter from "./contacts/Filter";

class App extends Component {

  state = {
    contacts: initialContacts,
    filter: '',
  };
  
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id)
    }))
  };

  addContact = (data) => {
    
    if (this.state.contacts.filter(contact => contact.name === data.name).length > 0) {
      alert(`${data.name} is already in contacts`)
      return
    }

    const id = nanoid();
    const contact = { id: id, name: data.name, number: data.number };
    const contacts = [contact, ...this.state.contacts];

    this.setState({ contacts: contacts });
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
    console.log(event.currentTarget.value)
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }
  
  render() { 

    const visibleContacts = this.getVisibleContacts();

    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChange={this.changeFilter}
        />

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />

      </div>
    )
  }
}
export default App;
