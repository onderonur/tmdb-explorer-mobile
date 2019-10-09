import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import {useNavigation} from 'react-navigation-hooks';
import BaseListItem from '../components/BaseListItem';
import BaseTouchableNativeFeedback from '../components/BaseTouchableNativeFeedback';

const MovieVideoListItem = React.memo(({videoId, movieId, isSelected}) => {
  const video = useSelector(state => selectors.selectVideo(state, videoId));
  const navigation = useNavigation();

  const navigateToVideo = useCallback(() => {
    navigation.navigate('MovieVideoPlayerModal', {videoId, movieId});
  }, [navigation, videoId, movieId]);

  return (
    <BaseListItem
      title={video.name}
      subtitle={video.type}
      onPress={navigateToVideo}
      Component={BaseTouchableNativeFeedback}
      isSelected={isSelected}
    />
  );
});

export default MovieVideoListItem;
