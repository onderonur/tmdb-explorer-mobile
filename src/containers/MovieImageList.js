import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovieImages} from '../actions';
import {selectors} from '../reducers';
import BaseFlatList from '../components/BaseFlatList';
import {View} from 'react-native';
import MovieImageListItem from './MovieImageListItem';

const MovieImageList = React.memo(({movieId}) => {
  const backdropIds = useSelector(state =>
    selectors.selectMovieBackdrops(state, movieId),
  );
  const isFetching = useSelector(state =>
    selectors.selectIsFetchingMovieImages(state, movieId),
  );
  const dispatch = useDispatch();

  const renderItem = useCallback(
    ({item: backdropId}) => {
      return (
        <View style={{margin: 4}}>
          <MovieImageListItem backdropId={backdropId} movieId={movieId} />
        </View>
      );
    },
    [movieId],
  );

  useEffect(() => {
    dispatch(fetchMovieImages(movieId));
  }, [movieId, dispatch]);

  return (
    <BaseFlatList
      data={backdropIds}
      renderItem={renderItem}
      loading={isFetching}
      horizontal={true}
      ListEmptyComponent="No image has been found"
    />
  );
});

export default MovieImageList;
