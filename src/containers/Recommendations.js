import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRecommendations} from '../actions';
import MovieCard from './MovieCard';
import {selectors} from '../reducers';
import BaseFlatList from '../components/BaseFlatList';
import {View} from 'react-native';

function renderItem({item: movieId}) {
  return (
    <View style={{margin: 4}}>
      <MovieCard movieId={movieId} width={230} />
    </View>
  );
}

const Recommendations = React.memo(({movieId}) => {
  const recommendationIds = useSelector(
    state => selectors.selectMovieRecommendations(state, movieId) || [],
  );
  const isFetching = useSelector(state =>
    selectors.selectIsFetchingMovieRecommendations(state, movieId),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecommendations(movieId));
  }, [movieId, dispatch]);

  return (
    <BaseFlatList
      data={recommendationIds}
      renderItem={renderItem}
      loading={isFetching}
      horizontal={true}
      ListEmptyComponent="No recommendation has been found"
    />
  );
});

export default Recommendations;
