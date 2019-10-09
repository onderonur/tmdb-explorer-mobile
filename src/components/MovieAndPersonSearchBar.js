import React from 'react';
import {SearchBar} from 'react-native-elements';
import {useNavigationParam, useNavigation} from 'react-navigation-hooks';
import {StyleSheet} from 'react-native';

function MovieAndPersonSearchBar() {
  const navigation = useNavigation();
  const searchValue = useNavigationParam('searchValue') || '';

  function handleChangeText(text) {
    navigation.setParams({searchValue: text});
  }

  // TODO: Focus on search input when screen is focused.
  return (
    <SearchBar
      placeholder="Search Movies & People"
      onChangeText={handleChangeText}
      value={searchValue}
      containerStyle={styles.container}
      autoFocus
      round
      returnKeyType="search"
      onSubmitEditing={() => {
        if (searchValue) {
          navigation.navigate('SearchResults', {searchValue});
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MovieAndPersonSearchBar;
