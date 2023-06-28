import { getMovies } from './api/movies/getMovies';
import styles from './page.module.css';

export default async function Home() {
  const movies = await getMovies();
  return (
    <main className={styles.main}>
      <p>
        {movies.map((m) => (
          <div key={m.id}>
            <p>{m.title}</p>
          </div>
        ))}
      </p>
    </main>
  );
}
