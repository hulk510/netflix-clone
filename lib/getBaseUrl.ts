export const getBaseUrl = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/`
    : `http://localhost:${process.env.PORT ?? 3000}`;
