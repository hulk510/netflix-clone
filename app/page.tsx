import { Row } from './_components/row';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Row title="NETFLIX ORIGUINALS" category="netflixOriginals" isLargeRow />
      <Row title="Top Rated" category="topRated" />
      <Row title="Action Movies" category="actionMovies" />
      <Row title="Comedy Movies" category="comedyMovies" />
      <Row title="Horror Movies" category="horrorMovies" />
      <Row title="Romance Movies" category="romanceMovies" />
      <Row title="Documentaries" category="documentMovies" />
    </main>
  );
}
