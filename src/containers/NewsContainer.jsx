import React, { Component } from 'react';
import { fetchArticles } from '../services/NewsAPI';

export default class NewsContainer extends Component {
  state = {
    loading: true,
    articles: [],
  };

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({ articles, loading: false });
  };

  render() {
    const {loading, articles} = this.state;

    if (loading) {
      return <h1>Loading ... </h1>;
    }
    return <div>Your articles!</div>;
  }
}
export default NewsContainer
