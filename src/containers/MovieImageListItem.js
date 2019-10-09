import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import TouchableCard from '../components/TouchableCard';
import {useNavigation} from 'react-navigation-hooks';

const IMAGE_WIDTH = 240;

function MovieImageListItem({movieId, backdropId}) {
  const navigation = useNavigation();
  const backdrop = useSelector(state =>
    selectors.selectBackdrop(state, backdropId),
  );

  const handleOnPress = useCallback(() => {
    navigation.navigate('MovieImageGallery', {movieId});
  }, [navigation, movieId]);

  return (
    <TouchableCard
      imageSrc={backdrop.file_path}
      width={IMAGE_WIDTH}
      imageAspectRatio={16 / 9}
      onPress={handleOnPress}
    />
  );
}

export default MovieImageListItem;
