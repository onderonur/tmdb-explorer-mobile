import produce from 'immer';
import merge from 'lodash.merge';

const initialState = {
  movies: {},
  genres: {},
  movieCredits: {},
  castCredits: {},
  people: {},
  personCredits: {},
  videos: {},
  movieVideos: {},
  movieRecommendations: {},
  movieBackdrops: {},
  backdrops: {},
};

function entities(state = initialState, action) {
  return produce(state, draft => {
    if (action.response && action.response.entities) {
      draft = merge(draft, action.response.entities);
    }
  });
}

export default entities;

const selectMovie = (state, id) => state.movies[id];
const selectPerson = (state, id) => state.people[id];

export const selectors = {
  selectMovie,
  selectMovies: (state, movieIds) =>
    movieIds.map(movieId => selectMovie(state, movieId)),

  selectGenre: (state, id) => state.genres[id],

  selectMovieCredits: (state, movieId) => state.movieCredits[movieId],

  selectCastCredits: (state, castCreditId) => state.castCredits[castCreditId],

  selectPerson,

  selectPeople: (state, personIds) =>
    personIds.map(personId => selectPerson(state, personId)),

  selectPersonCredits: (state, personId) => state.personCredits[personId],

  selectVideo: (state, videoId) => state.videos[videoId],

  selectMovieVideos: (state, movieId) =>
    state.movieVideos[movieId] ? state.movieVideos[movieId].videos : undefined,

  selectMovieRecommendations: (state, movieId) => {
    const recommendations = state.movieRecommendations[movieId];
    return recommendations ? recommendations.movies : undefined;
  },

  selectMovieBackdrops: (state, movieId) => {
    const movieBackdrops = state.movieBackdrops[movieId];
    return movieBackdrops ? movieBackdrops.backdrops : undefined;
  },

  selectBackdrop: (state, backdropId) => state.backdrops[backdropId],
};
