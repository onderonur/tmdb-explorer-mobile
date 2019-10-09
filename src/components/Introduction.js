import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import {getImageUrl} from '../utils';
import BaseText from './BaseText';

function Introduction({imageSrc, title, content}) {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: getImageUrl(imageSrc)}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.contentContainer}>
        {typeof title === 'string' ? <BaseText h4>{title}</BaseText> : title}

        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {backgroundColor: 'rgb(32, 63, 88)', paddingHorizontal: 12},
  imageContainer: {flexDirection: 'row', justifyContent: 'center'},
  image: {
    aspectRatio: 2 / 3,
    width: 300,
  },
  contentContainer: {paddingVertical: 8},
});

export default Introduction;
