import React from 'react';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import {View} from 'react-native';
import useReactNativeElementsTheme from '../hooks/useReactNativeElementsTheme';
import BaseText from '../components/BaseText';

const MovieGenreChip = React.memo(({genreId}) => {
  const genre = useSelector(state => selectors.selectGenre(state, genreId));
  const {theme} = useReactNativeElementsTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.grey2,
        padding: 8,
        margin: 4,
        borderRadius: 12,
      }}>
      <BaseText style={{color: '#fafafa', fontWeight: '600'}}>
        {genre.name}
      </BaseText>
    </View>
  );
});

export default MovieGenreChip;
