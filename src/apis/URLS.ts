const getSearchURL = (term: string | null) => {
  if (!term) throw new Error("should provide the search term");
  return `https://itunes.apple.com/search?term=${term}`;
};

export { getSearchURL };
