import React from 'react';
import {useNavigationParam} from 'react-navigation-hooks';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import {HeaderTitle} from 'react-navigation-stack';

function MovieProfileNavigationTitle() {
  const movieId = useNavigationParam('movieId');
  const movie = useSelector(state => selectors.selectMovie(state, movieId));

  return movie && <HeaderTitle>{movie.title}</HeaderTitle>;
}

export default MovieProfileNavigationTitle;
