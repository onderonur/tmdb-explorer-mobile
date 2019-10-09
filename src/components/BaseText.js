import React from 'react';
import {Text} from 'react-native-elements';
import {StyleSheet} from 'react-native';

function BaseText({style, ...rest}) {
  return <Text {...rest} style={[styles.text, style]} />;
}

const styles = StyleSheet.create({
  text: {
    color: '#fafafa',
  },
});

export default BaseText;
