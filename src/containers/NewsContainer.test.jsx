import React, { Component } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsContainer from './NewsContainer';

describe('Shows NewsAPI Articles!', () => {
  it('should display a list of articles containing an input keyword', async () => {
    render(<NewsContainer />);
    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();

    const searchInput = await screen.findByLabelText('Search Input');
    userEvent.type(searchInput, 'tesla');

    const submitButton = await screen.findByRole('button', {
      name: 'get-articles',
    });

    userEvent.click(submitButton);

    return waitFor(async () => {
      const articles = await screen.getAllByText('tesla', {
        exact: false,
      });

      expect(articles).toHaveLength(14);
    });
  });
});
