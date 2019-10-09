import React from 'react';
import {ListItem} from 'react-native-elements';
import {StyleSheet} from 'react-native';

function BaseListItem({isSelected, ...rest}) {
  return (
    <ListItem
      {...rest}
      titleStyle={styles.text}
      subtitleStyle={styles.text}
      containerStyle={isSelected ? styles.selectedContainer : styles.container}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fafafa',
  },
  container: {
    backgroundColor: '#000',
  },
  selectedContainer: {
    backgroundColor: '#333',
  },
});

export default BaseListItem;
