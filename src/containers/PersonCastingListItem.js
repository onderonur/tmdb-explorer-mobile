import React from 'react';
import {useSelector} from 'react-redux';
import MovieCard from './MovieCard';
import {selectors} from '../reducers';

const PersonCastingListItem = React.memo(({castCreditId}) => {
  const cast = useSelector(state =>
    selectors.selectCastCredits(state, castCreditId),
  );

  return <MovieCard movieId={cast.movie} subheader={cast.character} />;
});

export default PersonCastingListItem;
