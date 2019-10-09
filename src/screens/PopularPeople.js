import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPopularPeople, refreshPopularPeople} from '../actions';
import {selectors} from '../reducers';
import ScreenRoot from '../components/ScreenRoot';
import PersonCardInfiniteList from '../components/PersonCardInfiniteList';

function PopularPeople() {
  const dispatch = useDispatch();
  const isFetching = useSelector(state =>
    selectors.selectIsFetchingPopularPeople(state),
  );
  const nextPage = useSelector(state =>
    selectors.selectPopularPeopleNextPage(state),
  );
  const personIds = useSelector(state =>
    selectors.selectPopularPeopleIds(state),
  );

  const fetchPeople = useCallback(
    page => {
      dispatch(fetchPopularPeople(page));
    },
    [dispatch],
  );

  const refreshPeople = useCallback(() => {
    dispatch(refreshPopularPeople());
  }, [dispatch]);

  return (
    <ScreenRoot>
      <PersonCardInfiniteList
        data={personIds}
        isFetching={isFetching}
        nextPage={nextPage}
        onFetchPage={fetchPeople}
        onRefresh={refreshPeople}
      />
    </ScreenRoot>
  );
}

export default PopularPeople;
