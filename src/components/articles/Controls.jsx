import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Controls({
  searchInput,
  onSearchInputChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="searchInput">Search Input </label>
      <input
        id="searchInput"
        name="searchInput"
        type="text"
        value={searchInput}
        onChange={onSearchInputChange}
      />
      <button aria-label="get-articles">Get Articles!</button>
    </form>
  );
}

Controls.propTypes = {
  searchInput: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
