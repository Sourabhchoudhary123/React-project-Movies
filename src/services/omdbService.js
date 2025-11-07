const API_KEY = 'd6770038';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query, page = 1, type = '') => {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}${type ? `&type=${type}` : ''}`;
  const res = await fetch(url);
  return res.json();
};

export const fetchMovieDetails = async (id) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`;
  const res = await fetch(url);
  return res.json();
};