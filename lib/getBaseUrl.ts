import { cache } from 'react';

export const getBaseUrl = cache(() => {
  console.log(process.env.VERCEL_URL);
  process.env.VERCEL_URL
    ? `https://asddf/`
    : `http://localhost:${process.env.PORT ?? 3000}`;
});
