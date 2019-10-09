import React from 'react';
import {useNavigationParam} from 'react-navigation-hooks';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import YouTubePlayer from '../components/YouTubePlayer';
import MovieVideoList from '../containers/MovieVideoList';
import BaseText from '../components/BaseText';
import ScreenRoot from '../components/ScreenRoot';
import {View, StyleSheet} from 'react-native';

const MovieVideoPlayerModal = () => {
  const movieId = useNavigationParam('movieId');
  const videoId = useNavigationParam('videoId');
  const videoToWatch = useSelector(state =>
    selectors.selectVideo(state, videoId),
  );

  return (
    <ScreenRoot afterInteractions>
      <MovieVideoList
        movieId={movieId}
        selectedVideoId={videoId}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <YouTubePlayer youTubeId={videoToWatch.key} />
            <BaseText h3 h3Style={styles.videoTitle}>
              {videoToWatch.name}
            </BaseText>
          </View>
        }
        stickyHeaderIndices={[0]}
      />
    </ScreenRoot>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000',
    paddingBottom: 8,
  },
  videoTitle: {
    fontSize: 22,
    paddingHorizontal: 12,
  },
});

export default MovieVideoPlayerModal;
