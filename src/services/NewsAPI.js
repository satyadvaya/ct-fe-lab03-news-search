export const fetchArticles = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${process.env.NewsAPI_Key}`
  );
  const json = await res.json();
  const articles = json.articles;
  console.log('articles', articles);
  return articles;
};
