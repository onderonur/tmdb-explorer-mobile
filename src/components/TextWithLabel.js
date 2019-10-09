import React from 'react';
import {StyleSheet, View} from 'react-native';
import BaseText from './BaseText';

function TextWithLabel({label, text}) {
  return (
    <View>
      <BaseText style={styles.label}>{label}</BaseText>
      {typeof text === 'string' ? <BaseText>{text}</BaseText> : text}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
  },
});

export default TextWithLabel;
