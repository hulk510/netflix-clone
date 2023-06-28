// {
//   adult: false,
//   backdrop_path: '/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg',
//   id: 976573,
//   title: 'Elemental',
//   original_language: 'en',
//   original_title: 'Elemental',
//   overview: 'In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.',
//   poster_path: '/8riWcADI1ekEiBguVB9vkilhiQm.jpg',
//   media_type: 'movie',
//   genre_ids: [Array],
//   popularity: 1224.27,
//   release_date: '2023-06-14',
//   video: false,
//   vote_average: 7.375,
//   vote_count: 208
// },
export type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};
