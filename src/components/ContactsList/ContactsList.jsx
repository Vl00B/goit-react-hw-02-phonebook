import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const List = ({ contacts, children, deleteContact }) => {
  return (
    <section className="list">
      <h2>List</h2>
      {children}
      <ul>
        {contacts.map(contact => {
          contact.id = nanoid();
          return (
            <li key={contact.id} className="element">
              <span>
                <p>{contact.name}: </p>
                <p>{contact.number}</p>
              </span>
              <button
                type="button"
                onClick={() => {
                  deleteContact(contact.name);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

List.propTypes = {
  contacts: PropTypes.array.isRequired,
};
