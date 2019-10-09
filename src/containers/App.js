import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectors} from '../reducers';
import {fetchGenres} from '../actions';
import Spinner from '../components/Spinner';
import AppContainer from '../components/AppContainer';
import {SafeAreaView, StyleSheet} from 'react-native';

function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(state =>
    selectors.selectIsFetchingGenres(state),
  );

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return isFetching ? (
    <SafeAreaView style={styles.spinnerRoot}>
      <Spinner loading />
    </SafeAreaView>
  ) : (
    <AppContainer theme="dark" />
  );
}

const styles = StyleSheet.create({
  spinnerRoot: {
    backgroundColor: '#000',
    flex: 1,
  },
});

export default App;
