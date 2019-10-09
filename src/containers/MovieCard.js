import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import {useNavigation} from 'react-navigation-hooks';
import TouchableCard from '../components/TouchableCard';
import {View} from 'react-native';
import MovieRating from './MovieRating';

const MovieCard = React.memo(({movieId, subheader, width}) => {
  const navigation = useNavigation();
  const movie = useSelector(state => selectors.selectMovie(state, movieId));

  const handleOnPress = useCallback(() => {
    navigation.navigate('MovieProfile', {movieId});
  }, [navigation, movieId]);

  return (
    <View>
      <TouchableCard
        title={movie.title}
        featuredTitle={subheader}
        imageSrc={movie.poster_path}
        imageAspectRatio={2 / 3}
        onPress={handleOnPress}
        width={width}
      />
      <View style={{position: 'absolute', top: 0, left: 0}}>
        <MovieRating movieId={movieId} />
      </View>
    </View>
  );
});

export default MovieCard;
