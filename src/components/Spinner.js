import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

function Spinner({loading, children}) {
  return loading ? (
    <View style={styles.root}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    children || null
  );
}

const styles = StyleSheet.create({
  root: {
    paddingVertical: 20,
  },
});

export default Spinner;
