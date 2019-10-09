import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectors} from '../reducers';
import {fetchPopularMovies, refreshPopularMovies} from '../actions';
import MovieCardInfiniteList from '../components/MovieCardInfiniteList';
import ScreenRoot from '../components/ScreenRoot';

function PopularMovies() {
  const dispatch = useDispatch();
  const isFetching = useSelector(state =>
    selectors.selectIsFetchingPopularMovies(state),
  );
  const nextPage = useSelector(state =>
    selectors.selectPopularMoviesNextPage(state),
  );
  const movieIds = useSelector(state => selectors.selectPopularMovieIds(state));

  const fetchMovies = useCallback(
    page => {
      dispatch(fetchPopularMovies(page));
    },
    [dispatch],
  );

  const refreshMovies = useCallback(() => {
    dispatch(refreshPopularMovies());
  }, [dispatch]);

  return (
    <ScreenRoot>
      <MovieCardInfiniteList
        data={movieIds}
        onFetchPage={fetchMovies}
        isFetching={isFetching}
        nextPage={nextPage}
        onRefresh={refreshMovies}
      />
    </ScreenRoot>
  );
}

export default PopularMovies;
