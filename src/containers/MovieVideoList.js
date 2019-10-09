import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovieVideos} from '../actions';
import {selectors} from '../reducers';
import MovieVideoListItem from './MovieVideoListItem';
import BaseFlatList from '../components/BaseFlatList';

function MovieVideoList({
  movieId,
  selectedVideoId,
  ListHeaderComponent,
  stickyHeaderIndices,
}) {
  const dispatch = useDispatch();
  const movieVideoIds =
    useSelector(state => selectors.selectMovieVideos(state, movieId)) || [];
  const isFetching = useSelector(state =>
    selectors.selectIsFetchingMovieVideos(state, movieId),
  );

  useEffect(() => {
    dispatch(fetchMovieVideos(movieId));
  }, [dispatch, movieId]);

  const renderItem = useCallback(
    ({item: videoId}) => {
      return (
        <MovieVideoListItem
          videoId={videoId}
          movieId={movieId}
          isSelected={videoId === selectedVideoId}
        />
      );
    },
    [movieId, selectedVideoId],
  );

  return (
    <BaseFlatList
      data={movieVideoIds}
      renderItem={renderItem}
      loading={isFetching}
      ListHeaderComponent={ListHeaderComponent}
      stickyHeaderIndices={stickyHeaderIndices}
      ListEmptyComponent={'No video has been found'}
      showSeparators
    />
  );
}

export default MovieVideoList;
