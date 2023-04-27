import React, { Component } from "react";
import ContactList from "./phonebook/ContactsList";
import initialContacts from '../components/contacts.json'

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

        <h2>Contacts</h2>
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />

      </div>
    )
  }
}
export default App;
