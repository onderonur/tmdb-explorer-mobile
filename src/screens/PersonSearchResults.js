import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectors} from '../reducers';
import {fetchPersonSearch} from '../actions';
import {useNavigationParam} from 'react-navigation-hooks';
import PersonCardInfiniteList from '../components/PersonCardInfiniteList';
import ScreenRoot from '../components/ScreenRoot';

function PersonSearchResults() {
  const searchValue = useNavigationParam('searchValue');
  const dispatch = useDispatch();
  const personIds = useSelector(state =>
    selectors.selectPersonSearchResultIds(state, searchValue),
  );
  const isFetching = useSelector(state =>
    selectors.selectIsFetchingPersonSearchResults(state, searchValue),
  );
  const nextPage = useSelector(state =>
    selectors.selectPersonSearchResultsNextPage(state, searchValue),
  );

  const fetchPersonSearchResults = useCallback(
    page => {
      dispatch(fetchPersonSearch(searchValue, page));
    },
    [dispatch, searchValue],
  );

  return (
    <ScreenRoot>
      <PersonCardInfiniteList
        data={personIds}
        isFetching={isFetching}
        nextPage={nextPage}
        onFetchPage={fetchPersonSearchResults}
      />
    </ScreenRoot>
  );
}

export default PersonSearchResults;
