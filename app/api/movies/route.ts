import { NextResponse } from 'next/server';
import { categories, getTMDBUrl } from '../../../lib/getTMDBUrl';
import { Movie } from './movie';

export type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export async function GET(request: Request) {
  console.log('start');
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'topRated';
  const res = await fetch(`${getTMDBUrl()}/${categories[category]}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(res);
  const product: MovieResponse = await res.json();
  return NextResponse.json(product.results);
}
