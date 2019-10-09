import axios from 'axios';
import {BASE_API_URL, BASE_IMG_API_URL} from '../constants/urls';
import {api_key} from '../constants/apiKeys';
// TODO: import placeholderPng from 'assets/placeholder.png';

function addApiKeyToQueryParams(params = {}) {
  return {
    ...params,
    api_key,
  };
}

export function get(endpoint, params) {
  return axios.get(`${BASE_API_URL}${endpoint}`, {
    params: addApiKeyToQueryParams(params),
  });
}

export function getMovieReleaseYear(movie) {
  return new Date(movie.release_date).getFullYear();
}

export function getImageUrl(path) {
  if (!path) {
    return null;
    // TODO: return placeholderPng;
  }

  return `${BASE_IMG_API_URL}/w500${path}`;
}
