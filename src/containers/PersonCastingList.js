import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectors} from '../reducers';
import {fetchPersonCredits} from '../actions';
import PersonCastingListItem from './PersonCastingListItem';
import Spinner from '../components/Spinner';
import BaseFlatList from '../components/BaseFlatList';

const MIN_ITEM_WIDTH = 160;

function renderItem({item: castingId}) {
  return <PersonCastingListItem castCreditId={castingId} />;
}

function PersonCastingList({personId, ListHeaderComponent}) {
  const dispatch = useDispatch();
  const personCredits = useSelector(state =>
    selectors.selectPersonCredits(state, personId),
  );
  const castingIds = personCredits ? personCredits.castings : [];
  const isFetching = useSelector(state =>
    selectors.selectIsFetchingPersonCredits(state, personId),
  );

  useEffect(() => {
    dispatch(fetchPersonCredits(personId));
  }, [personId, dispatch]);

  return (
    <Spinner loading={isFetching}>
      <BaseFlatList
        data={castingIds}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent="No casting has been found"
        minItemWidth={MIN_ITEM_WIDTH}
      />
    </Spinner>
  );
}

export default PersonCastingList;
