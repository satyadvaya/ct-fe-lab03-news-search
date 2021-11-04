import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Article({ title, author, description }) {
  return (
    <>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{description}</p>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string.isRequired,
};
