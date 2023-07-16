import useSWR from 'swr';
import { getBaseUrl } from '../../../lib/getBaseUrl';
import { Movie } from './movie';

export async function getMovies(category: string) {
  const res = await fetch(`${getBaseUrl()}/api/movies?category=${category}`);
  let movies: Movie[] = [];
  switch (res.status) {
    case 200:
      movies = await res.json();
      break;
    default:
      break;
  }
  return movies;
}

const fetcher = (url: string) => fetch(url).then<Movie[]>((r) => r.json());

export function useGetMovies(category: string) {
  const response = useSWR(
    `http://localhost:3000/api/movies?category=${category}`,
    fetcher
  );

  return response;
}
