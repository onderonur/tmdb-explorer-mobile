import React, {useEffect} from 'react';
import {fetchMovieCredits} from '../actions';
import {useDispatch, useSelector} from 'react-redux';
import {selectors} from '../reducers';
import MovieCastListItem from './MovieCastListItem';
import BaseFlatList from '../components/BaseFlatList';

function renderItem({item: castCreditId}) {
  return <MovieCastListItem castCreditId={castCreditId} />;
}

function MovieCastList({movieId, ListHeaderComponent}) {
  const dispatch = useDispatch();
  const movieCredits = useSelector(state =>
    selectors.selectMovieCredits(state, movieId),
  );
  const castCreditIds = movieCredits ? movieCredits.cast : [];
  const isFetchingCredits = useSelector(state =>
    selectors.selectIsFetchingMovieCredits(state, movieId),
  );

  useEffect(() => {
    dispatch(fetchMovieCredits(movieId));
  }, [movieId, dispatch]);

  return (
    <BaseFlatList
      data={castCreditIds}
      renderItem={renderItem}
      loading={isFetchingCredits}
      ListHeaderComponent={ListHeaderComponent}
      ListEmptyComponent="No cast has been found"
      showSeparators
    />
  );
}

export default MovieCastList;
