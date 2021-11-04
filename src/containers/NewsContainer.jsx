import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Controls from '../components/articles/Controls';
import { fetchArticles } from '../services/NewsAPI';

export default class NewsContainer extends Component {
  state = {
    loading: true,
    articles: [],
    newsSearch: '',
  };

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({ articles, loading: false });
  }

  handleNewsSearchChange = (event) => {
    this.setState({ newsSearch: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const articles = await fetchArticles(this.state.newsSearch);
    this.setState({ articles, loading: false });
  };

  render() {
    const { loading, articles, newsSearch } = this.state;

    return (
      <>
        {loading ? (
          <h1>Loading ... </h1>
        ) : (
          <>
            <Controls
              newsSearch={newsSearch}
              onNewsSearchChange={this.handleNewsSearchChange}
              onSubmit={this.handleSubmit}
            />
            <ArticleList articles={articles} />
          </>
        )}
      </>
    );
  }
}
