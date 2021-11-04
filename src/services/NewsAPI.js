export const fetchArticles = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${process.env.REACT_APP_NewsAPI_Key}`
  );
  console.log(res.body);
  const json = await res.json();
  const articles = json.articles;
  console.log('articles', articles);
  return articles;
};

export const fetchFilteredArticles = async (searchInput) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${searchInput}&domains=wsj.com&apiKey=${process.env.REACT_APP_NewsAPI_Key}`
  );
  console.log(res.body);
  const json = await res.json();
  const articles = json.articles;
  console.log('filteredArticles', articles);
  return articles;
};
