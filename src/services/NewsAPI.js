export const fetchArticles = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`
  );
  const json = await res.json();
  const articles = json.articles;
  return articles;
};

export const fetchFilteredArticles = async (searchInput) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${searchInput}&domains=wsj.com&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`
  );
  const json = await res.json();
  const articles = json.articles;
  return articles;
};
