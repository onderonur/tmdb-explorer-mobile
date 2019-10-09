import {combineReducers} from 'redux';
import createPagination, {
  selectPageItems,
  selectNextPage,
  selectTotalCount,
} from './higherOrderReducers/createPagination';
import * as actionTypes from '../constants/actionTypes';
import createByKey from './higherOrderReducers/createByKey';

const pagination = combineReducers({
  popularMovies: createPagination(
    actionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
    actionTypes.RESET_POPULAR_MOVIES,
  ),
  popularPeople: createPagination(
    actionTypes.FETCH_POPULAR_PEOPLE_SUCCESS,
    actionTypes.RESET_POPULAR_PEOPLE,
  ),
  movieSearchResultsByQuery: createByKey(
    action => action.query,
    createPagination(actionTypes.FETCH_MOVIE_SEARCH_SUCCESS),
  ),
  personSearchResultsByQuery: createByKey(
    action => action.query,
    createPagination(actionTypes.FETCH_PERSON_SEARCH_SUCCESS),
  ),
});

export default pagination;

export const selectors = {
  // Popular Movies
  selectPopularMovieIds: state => selectPageItems(state.popularMovies),
  selectPopularMoviesNextPage: state => selectNextPage(state.popularMovies),

  // Popular People
  selectPopularPeopleIds: state => selectPageItems(state.popularPeople),
  selectPopularPeopleNextPage: state => selectNextPage(state.popularPeople),

  // MovieSearchResultsByQuery
  selectMovieSearchResultIds: (state, query) =>
    selectPageItems(state.movieSearchResultsByQuery[query]),
  selectMovieSearchResultsNextPage: (state, query) =>
    selectNextPage(state.movieSearchResultsByQuery[query]),
  selectMovieSearchResultsTotalCount: (state, query) =>
    selectTotalCount(state.movieSearchResultsByQuery[query]),

  // PersonSearchResultsByQuery
  selectPersonSearchResultIds: (state, query) =>
    selectPageItems(state.personSearchResultsByQuery[query]),
  selectPersonSearchResultsNextPage: (state, query) =>
    selectNextPage(state.personSearchResultsByQuery[query]),
  selectPersonSearchResultsTotalCount: (state, query) =>
    selectTotalCount(state.personSearchResultsByQuery[query]),
};
