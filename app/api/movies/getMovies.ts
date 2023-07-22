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
