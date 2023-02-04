import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'fbee7941f117d258bba2ad0706e433a4';

export async function getTrendingMovies() {
  return await axios.get(`trending/movie/day?api_key=${API_KEY}`);
}

export async function searchMovie(searchQuery) {
  return await axios.get(
    `search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
}

export async function getMovieDetails(movieId) {
  return await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
}

export async function getMovieCredits(movieId) {
  return await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
}

export async function getMovieReviews(movieId) {
  return await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
}
