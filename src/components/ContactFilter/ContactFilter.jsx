import PropTypes from 'prop-types';

export const Filter = ({ filter, toFilterContacts }) => {
  return (
    <>
      <h3>Filter</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={toFilterContacts}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  toFilterContacts: PropTypes.func.isRequired,
};
