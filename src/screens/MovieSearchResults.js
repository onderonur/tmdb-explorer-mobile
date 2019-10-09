import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectors} from '../reducers';
import {fetchMovieSearch} from '../actions';
import {useNavigationParam} from 'react-navigation-hooks';
import MovieCardInfiniteList from '../components/MovieCardInfiniteList';
import ScreenRoot from '../components/ScreenRoot';

function MovieSearchResults() {
  const searchValue = useNavigationParam('searchValue');
  const dispatch = useDispatch();
  const movieIds = useSelector(state =>
    selectors.selectMovieSearchResultIds(state, searchValue),
  );
  const isFetching = useSelector(state =>
    selectors.selectIsFetchingMovieSearchResults(state, searchValue),
  );
  const nextPage = useSelector(state =>
    selectors.selectMovieSearchResultsNextPage(state, searchValue),
  );

  const fetchMovieSearchResults = useCallback(
    page => {
      dispatch(fetchMovieSearch(searchValue, page));
    },
    [dispatch, searchValue],
  );

  return (
    <ScreenRoot>
      <MovieCardInfiniteList
        data={movieIds}
        onFetchPage={fetchMovieSearchResults}
        isFetching={isFetching}
        nextPage={nextPage}
      />
    </ScreenRoot>
  );
}

export default MovieSearchResults;
