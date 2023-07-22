import useSWR from 'swr';
import { getBaseUrl } from '../../lib/getBaseUrl';
import { Movie } from '../api/movies/movie';

const fetcher = (url: string) =>
  fetch(url)
    .then<Movie[]>((r) => r.json())
    .catch((e) => {
      console.log(e);
    });

export function useGetMovies(category: string) {
  const { data, error } = useSWR(
    `${getBaseUrl()}/api/movies?category=${category}`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
