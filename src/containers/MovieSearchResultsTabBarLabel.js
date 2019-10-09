import React from 'react';
import {Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import {useNavigationParam} from 'react-navigation-hooks';

const MovieSearchResultsTabBarLabel = ({tintColor}) => {
  const searchValue = useNavigationParam('searchValue');
  const total = useSelector(state =>
    selectors.selectMovieSearchResultsTotalCount(state, searchValue),
  );

  return <Text style={{color: tintColor}}>MOVIES ({total})</Text>;
};

export default MovieSearchResultsTabBarLabel;
