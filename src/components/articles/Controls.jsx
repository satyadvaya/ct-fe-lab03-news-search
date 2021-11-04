import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Controls({ newsSearch, onNewsSearchChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="newsSearch">News Search </label>
      <input type="text" value={newsSearch} onChange={onNewsSearchChange} />
      <button aria-label="get-articles">Get Articles!</button>
    </form>
  );
}

Controls.propTypes = {
  newsSearch: PropTypes.string.isRequired,
  onNewsSearchChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
