import Image from 'next/image';
import { getMovies } from '../api/movies/getMovies';

type Props = {
  title: string;
  category: string;
  isLargeRow?: boolean;
};

export const Row: React.FC<Props> = async ({ title, category, isLargeRow }) => {
  const base_url = 'https://image.tmdb.org/t/p/original';
  const movies = await getMovies(category);
  console.log(movies);
  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {/* ポスターコンテンツ */}
        {movies.map((movie, i) => (
          <Image
            key={movie.id}
            alt={movie.name}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            width={isLargeRow ? 300 : 200}
            height={isLargeRow ? 450 : 250}
          />
        ))}
      </div>
    </div>
  );
};
