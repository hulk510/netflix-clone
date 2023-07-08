import Image from 'next/image';
import { getMovies } from '../api/movies/getMovies';
import styles from './row.module.css';

type Props = {
  title: string;
  category: string;
  isLargeRow?: boolean;
};

export const Row: React.FC<Props> = async ({ title, category, isLargeRow }) => {
  const base_url = 'https://image.tmdb.org/t/p/original';
  const movies = await getMovies(category);
  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.posters}>
        {/* ポスターコンテンツ */}
        {movies.map((movie, i) => (
          <Image
            key={movie.id}
            alt={movie.name}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            className={styles.poster}
            width={300}
            height={isLargeRow ? 350 : 250}
          />
        ))}
      </div>
    </div>
  );
};
