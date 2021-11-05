import React, { Component } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsContainer from './NewsContainer';

describe('Shows NewsAPI Articles!', () => {
  it('should display a list of articles containing an input keyword', async () => {
    // Tests that loading state is showing
    render(<NewsContainer />);
    screen.getByText('Loading...');

    // Tests that articles are returned from API request and that we're not loading
    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();

    // Tests that form accepts input for keyword search
    const searchInput = await screen.findByLabelText('Search Input');
    userEvent.type(searchInput, 'tesla');

    // Test that button submits input
    const submitButton = await screen.findByRole('button', {
      name: 'get-articles',
    });

    userEvent.click(submitButton);

    // Tests that we await API results based on our search
    return waitFor(async () => {
      const articles = await screen.getAllByText('tesla', {
        exact: false,
      });

      // Tests the number of articles returned from our search
      expect(articles).toHaveLength(14);
    });
  });
});
