import React from 'react';
import YouTube from 'react-native-youtube';
import {google_api_key} from '../constants/apiKeys';
import {StyleSheet} from 'react-native';

const YouTubePlayer = ({youTubeId}) => {
  return (
    <YouTube
      apiKey={google_api_key}
      videoId={youTubeId}
      play
      style={styles.player}
    />
  );
};

const styles = StyleSheet.create({
  player: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
});

export default YouTubePlayer;
