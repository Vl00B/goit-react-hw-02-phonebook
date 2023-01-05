import { Component } from 'react';
import { List } from './ContactsList/ContactsList';
import { Filter } from './ContactFilter/ContactFilter';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { name: 'Rosie Simpson', number: '459-12-56' },
      { name: 'Hermione Kline', number: '443-89-12' },
      { name: 'Eden Clements', number: '645-17-79' },
      { name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitHendler = data => {
    const contact = {
      name: data.name,
      number: data.number,
    };

    const contactName = [];

    for (const contact of this.state.contacts) {
      contactName.push(contact.name);
    }

    if (contactName.includes(contact.name)) {
      alert(`${contact.name} is already in contacts list`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  toFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  toDelete = contactName => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contactName !== contact.name
      ),
    }));
  };

  onFilterContacts = () => {
    let filterContact = [];
    console.log('kk');
    if (this.state.filter) {
      filterContact = this.state.contacts.filter(
        contact =>
          contact.name
            .toLowerCase()
            .includes(this.state.filter.toLowerCase()) ||
          contact.number.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    } else {
      return this.state.contacts;
    }
    return filterContact;
  };

  render() {
    return (
      <>
        <ContactForm onSubmitForm={this.onSubmitHendler} />

        <List
          contacts={this.onFilterContacts()}
          children={<h3>Context</h3>}
          deleteContact={this.toDelete}
        >
          <Filter toFilterContacts={this.toFilter} filter={this.state.filter} />
        </List>
      </>
    );
  }
}
