import { cache } from 'react';

const TMDB_API_KEY = process.env.TMDB_API_KEY;

const language = 'ja';

// MEMO: APIいくつか取得できないのあるし指定の仕方もう少しいいやり方ありそう
// クラスとかで定義するのがいいかなって思うけど、めんどくさいのでやってない。
export const categories: { [key: string]: string } = {
  trending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=${language}`,
  netflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213&language=${language}`,
  topRated: `/discover/tv?api_key=${TMDB_API_KEY}&language=${language}`,
  actionMovies: `/discover/tv?api_key=${TMDB_API_KEY}&with_genres=28&language=${language}`,
  comedyMovies: `/discover/tv?api_key=${TMDB_API_KEY}&with_genres=35&language=${language}`,
  horrorMovies: `/discover/tv?api_key=${TMDB_API_KEY}&with_genres=27&language=${language}`,
  romanceMovies: `/discover/tv?api_key=${TMDB_API_KEY}&with_genres=10749&language=${language}`,
  documentMovies: `/discover/tv?api_key=${TMDB_API_KEY}&with_genres=99&language=${language}`,
};

export const getTMDBUrl = cache(() => 'https://api.themoviedb.org/3');
