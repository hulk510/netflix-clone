import { NextResponse } from 'next/server';
import { getTMDBUrl, pages } from '../../../lib/getTMDBUrl';
import { Movie } from './movie';

export type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const res = await fetch(`${getTMDBUrl()}/${pages.comedyMovies}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const product: MovieResponse = await res.json();
  return NextResponse.json(product.results);
}
