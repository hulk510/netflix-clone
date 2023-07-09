import { headers } from 'next/dist/client/components/headers';
import { getBaseUrl } from '../../../lib/getBaseUrl';
import { Movie } from './movie';

export async function getMovies(category: string) {
  const res = await fetch(`${getBaseUrl()}/api/movies?category=${category}`);
  console.log(headers());
  let movies: Movie[] = [];
  switch (res.status) {
    case 200:
      movies = await res.json();
      break;
    default:
      throw new Error('Something went wrong!');
      break;
  }
  return movies;
}
