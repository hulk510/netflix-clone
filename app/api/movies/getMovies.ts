import { getBaseUrl } from '../../../lib/getBaseUrl';
import { Movie } from './movie';

export async function getMovies(category: string) {
  const res = await fetch(`${getBaseUrl()}/api/movies?category=${category}`);
  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }
  const movies: Movie[] = await res.json();
  return movies;
}
