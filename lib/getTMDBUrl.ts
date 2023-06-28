import { cache } from 'react';

const TMDB_API_KEY = process.env.TMDB_API_KEY;

export const pages = {
  trending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-us`,
  netflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
  topRated: `/discover/tv?api_key=${TMDB_API_KEY}&languager=en-us`,
  actionMovies: `/discover/tv?api_key=${TMDB_API_KEY}&with_genres=28`,
  comedyMovies: `/discover/tv?api_key=${TMDB_API_KEY}&with_genres=35`,
  horrorMovies: `/discover/tv?api_key=${TMDB_API_KEY}&with_genres=27`,
  romanceMovies: `/discover/tv?api_key=${TMDB_API_KEY}&with_genres=10749`,
  documentMovies: `/discover/tv?api_key=${TMDB_API_KEY}&with_genres=99`,
};

export const getTMDBUrl = cache(() => 'https://api.themoviedb.org/3');
