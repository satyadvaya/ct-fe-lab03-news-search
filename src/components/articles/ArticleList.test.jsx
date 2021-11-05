import React, { Component } from 'react';
import ArticleList from './ArticleList';
import { render, screen } from '@testing-library/react';

const testArticles = [
  {
    author: 'Dave Sebastian',
    title: 'Hertz Orders 100k Teslas',
    description:
      'Car-rental firm, recently emerged from bankruptcy under new ownership, orders vehicles by the end of 2022',
  },
  {
    author: 'Richard Rubin',
    title: 'LEVIES ON UNSOLD ASSETS',
    description:
      'Sen. Ron Wyden releases details of plan to impose multibillion-dollar tax bills on people such as Amazon founder Jeff Bezos and Tesla CEO Elon Musk',
  },
  {
    author: 'James Willhite',
    title:
      'Tesla, Merck, Moderna: What to Watch When the Stock Market Opens Today',
    description:
      'Tesla reported record deliveries in the third quarter; Merck shares were extending gains from last week',
  },
];

describe('Shows a list of articles', () => {
  it('should display a list of articles containing an input keyword', () => {
    render(<ArticleList articles={testArticles} />);

    const articleList = screen.getByRole('list', {
      name: 'articles',
    });

    expect(articleList).toMatchSnapshot();
  });
});
