import React from 'react';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import {getImageUrl} from '../utils';
import {useNavigation} from 'react-navigation-hooks';
import BaseListItem from '../components/BaseListItem';
import BaseTouchableNativeFeedback from '../components/BaseTouchableNativeFeedback';

const MovieListItem = React.memo(({movieId}) => {
  const movie = useSelector(state => selectors.selectMovie(state, movieId));
  const navigation = useNavigation();

  function handleOnPress() {
    navigation.navigate('MovieProfile', {movieId});
  }

  return (
    <BaseListItem
      leftAvatar={{source: {uri: getImageUrl(movie.poster_path)}}}
      title={movie.title}
      onPress={handleOnPress}
      Component={BaseTouchableNativeFeedback}
    />
  );
});

export default MovieListItem;
