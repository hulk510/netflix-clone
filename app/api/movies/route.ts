import { NextResponse } from 'next/server';
import { Movie } from './movie';

const API_KEY = process.env.API_KEY;

export type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get('id');
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-us`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const product: MovieResponse = await res.json();
  return NextResponse.json(product.results);
}
