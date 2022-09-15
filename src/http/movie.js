import { request } from './request.js';

export async function fetchMovies({ keyword }) {
  return await request(`?apikey=7035c60c&s=${keyword}`);
}
