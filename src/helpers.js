export function getSummary(article_slug) {
  const summary = fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${article_slug}`
  ).then(response => {
    return response.json();
  });
  return summary;
}
