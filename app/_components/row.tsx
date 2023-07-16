'use client';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import YouTube from 'react-youtube';
import { useGetMovies } from '../api/movies/getMovies';
import { Movie } from '../api/movies/movie';
import styles from './row.module.css';

type Props = {
  title: string;
  category: string;
  isLargeRow?: boolean;
};

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

export const Row: React.FC<Props> = ({ title, category, isLargeRow }) => {
  const base_url = 'https://image.tmdb.org/t/p/original';
  const { data: movies } = useGetMovies(category);
  const [trailerUrl, setTrailerUrl] = useState<string | null>('');

  const opts: Options = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      console.log(movie);
      console.log(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      console.log(data);
      setTrailerUrl(data.data.results[0]?.key);
    }
  };

  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.posters}>
        {/* ポスターコンテンツ */}
        {movies?.map((movie, i) => (
          <Image
            key={movie.id}
            alt={movie.name}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path ?? ''
            }`}
            className={styles.poster}
            width={300}
            height={isLargeRow ? 350 : 250}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <h1>hello world</h1>}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};
