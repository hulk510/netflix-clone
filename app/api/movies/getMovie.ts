import { getBaseUrl } from '../../../lib/getBaseUrl';
import { Movie } from './movie';

export async function getMovie() {
  const res = await fetch(`${getBaseUrl()}/api/movies`);
  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }
  const movies: Movie[] = await res.json();
  return movies;
}
