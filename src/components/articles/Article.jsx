import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Article({ title, author, description }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{content}</p>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
