import { lowercaseKeys } from "./helpers/lowercaseKeys";

const API_KEY = "925919b4";

const processMoviesList = results => {
  results = lowercaseKeys(results);
  results.totalResults = Number(results.totalResults) || 0;
  results.response = JSON.parse(results.response.toLowerCase());
  results.data = results.search;
  delete results.search;
  return results;
};

// http://www.omdbapi.com/?s=star&page=10&apikey=925919b4
export const fetchMoviesList = async (title, page = 1) => {
  const url = `http://www.omdbapi.com/?s=${title}&page=${page}&apikey=${API_KEY}`;
  const response = await fetch(url);
  const results = await response.json();
  return processMoviesList(results);
};

const processMovie = results => {
  results = lowercaseKeys(results);
  results.response = JSON.parse(results.response.toLowerCase());
  return results;
};

export const fetchMovie = async id => {
  const url = `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;
  const response = await fetch(url);
  const results = await response.json();
  return processMovie(results);
};
