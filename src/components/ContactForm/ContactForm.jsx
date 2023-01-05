import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const inputNameId = nanoid();
const inputNumberId = nanoid();
const buttonId = nanoid();

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.currentTarget.value });
  };

  resetState = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
    this.resetState();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <h2>Contact Form</h2>
        <label>
          <span className={css.name}>Name</span>
          <input
            autoComplete="off"
            type="text"
            name="name"
            id={inputNameId}
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <span className={css.name}>Number</span>
          <input
            type="tel"
            name="number"
            id={inputNumberId}
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <label htmlFor={buttonId}>
          <button type="submit" id={buttonId}>
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  handelSubmit: PropTypes.func,
  inputNameId: PropTypes.string,
  inputNumberId: PropTypes.string,
  buttonId: PropTypes.string,
};
