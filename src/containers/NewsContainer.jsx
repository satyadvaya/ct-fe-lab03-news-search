import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Controls from '../components/articles/Controls';
import { fetchArticles, fetchFilteredArticles } from '../services/NewsAPI';

export default class NewsContainer extends Component {
  state = {
    loading: true,
    articles: [],
    searchInput: '',
  };

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({ articles, loading: false });
  }

  handleSearchInputChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const articles = await fetchFilteredArticles(this.state.searchInput);
    this.setState({ articles, loading: false });
  };

  render() {
    const { loading, articles, searchInput } = this.state;

    return (
      <>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Controls
              searchInput={searchInput}
              onSearchInputChange={this.handleSearchInputChange}
              onSubmit={this.handleSubmit}
            />
            <ArticleList articles={articles} />
          </>
        )}
      </>
    );
  }
}
