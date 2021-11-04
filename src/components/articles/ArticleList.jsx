import React, { Component } from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

export default function ArticleList({ articles }) {
  const ArticleList = articles.map(({ title, author, description }) => (
    <li key={`${title}-${author}-${description}`}>
      <Article title={title} author={author} description={description} />
    </li>
  ));
  return <ul aria-label="articles">{ArticleList}</ul>;
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      description: PropTypes.string.isRequired,
    })
  ),
};
