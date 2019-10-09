import React from 'react';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import PersonListItem from './PersonListItem';

const MovieCastListItem = React.memo(({castCreditId}) => {
  const cast = useSelector(state =>
    selectors.selectCastCredits(state, castCreditId),
  );

  const personId = cast.person;

  return <PersonListItem personId={personId} secondaryText={cast.character} />;
});

export default MovieCastListItem;
