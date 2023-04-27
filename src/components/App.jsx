import React, { Component } from "react";
import ContactList from "./contacts/ContactsList";
import initialContacts from '../components/contacts/contacts.json'
import ContactForm from "./phonebook/contactForm";
import { nanoid } from 'nanoid'

class App extends Component {

      state = {
        contacts: initialContacts,
        name: ''
  }
  
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id)
    }))
  }

  addContact = (data) => {
    
    const id = nanoid();
    const contact = { id: id, name: data.name, number: data.number };
    const contacts = [contact, ...this.state.contacts];

    this.setState({ contacts: contacts });
}

  render() {    
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
        {/* <Filter /> */}
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />

      </div>
    )
  }
}
export default App;
