import React from 'react';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import {View} from 'react-native';
import BaseText from '../components/BaseText';

const MovieRating = React.memo(({movieId}) => {
  const movie = useSelector(state => selectors.selectMovie(state, movieId));

  const {vote_average} = movie;

  return (
    <View
      style={{
        backgroundColor:
          vote_average > 7.5
            ? '#0F9D58'
            : vote_average > 5
            ? '#4285F4'
            : vote_average > 3
            ? '#F4B400'
            : '#DB4437',
        paddingVertical: 4,
        paddingHorizontal: 8,
      }}>
      <BaseText style={{fontWeight: 'bold', fontSize: 14}}>
        {vote_average} / 10
      </BaseText>
    </View>
  );
});

export default MovieRating;
