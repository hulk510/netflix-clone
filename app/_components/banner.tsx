import { getMovies } from '../api/movies/getMovies';
import styles from './banner.module.css';

export const Banner = async () => {
  const movies = await getMovies('netflixOriginals');
  // ランダムにひとつ取得
  // const movie = movies[0];
  const movie = movies[Math.floor(Math.random() * movies.length - 1)];

  // 文字列を指定した文字数で切り捨てる
  function truncate(str: string, n: number) {
    return str?.length > n ? str.slice(0, n - 1) + '...' : str;
  }

  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className={styles['banner-contents']}>
        <h1 className={styles['banner-title']}>
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className={styles['banner-buttons']}>
          <button className={styles['banner-button']}>Play</button>
          <button className={styles['banner-button']}>My List</button>
        </div>

        <h1 className={styles['banner-description']}>
          {truncate(movie.overview, 150)}
        </h1>
      </div>

      <div className={styles['banner-fadeBottom']} />
    </header>
  );
};
