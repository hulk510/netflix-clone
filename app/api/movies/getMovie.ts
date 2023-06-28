import { Movie } from './movie';

export async function getMovie() {
  const res = await fetch('http://localhost:3001/api/movie');
  // if (!res.ok) {
  //   // Render the closest `error.js` Error Boundary
  //   throw new Error('Something went wrong!');
  // }
  const r: Movie[] = await res.json();
  console.log(r);
  return r;
}
