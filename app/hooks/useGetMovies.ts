import useSWR from 'swr';
import { getBaseUrl } from '../../lib/getBaseUrl';
import { Movie } from '../api/movies/movie';

const fetcher = (url: string) => fetch(url).then<Movie[]>((r) => r.json());

export function useGetMovies(category: string) {
  const response = useSWR(
    `${getBaseUrl()}/api/movies?category=${category}`,
    fetcher
  );

  return response;
}
