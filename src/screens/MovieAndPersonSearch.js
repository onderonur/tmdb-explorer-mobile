import React, {useEffect} from 'react';
import MovieAndPersonSearchBar from '../components/MovieAndPersonSearchBar';
import {useNavigationParam} from 'react-navigation-hooks';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMovieSearch, fetchPersonSearch} from '../actions';
import {DEFAULT_FIRST_PAGE} from '../reducers/higherOrderReducers/createPagination';
import {selectors} from '../reducers';
import Spinner from '../components/Spinner';
import BaseFlatList from '../components/BaseFlatList';
import PersonListItem from '../containers/PersonListItem';
import MovieListItem from '../containers/MovieListItem';
import useDebounce from '../hooks/useDebounce';
import ScreenRoot from '../components/ScreenRoot';

const DEBOUNCE_MS = 250;

function MovieAndPersonSearch() {
  const searchValue = useNavigationParam('searchValue') || '';
  const debouncedSearchValue = useDebounce(searchValue, DEBOUNCE_MS);
  const dispatch = useDispatch();

  const movieIds =
    useSelector(state =>
      selectors.selectMovieSearchResultIds(state, debouncedSearchValue),
    ) || [];
  const movies = useSelector(state => selectors.selectMovies(state, movieIds));

  const personIds =
    useSelector(state =>
      selectors.selectPersonSearchResultIds(state, debouncedSearchValue),
    ) || [];
  const people = useSelector(state => selectors.selectPeople(state, personIds));

  const isFetchingMovies = useSelector(state =>
    selectors.selectIsFetchingMovieSearchResults(state, debouncedSearchValue),
  );
  const isFetchingPeople = useSelector(state =>
    selectors.selectIsFetchingPersonSearchResults(state, debouncedSearchValue),
  );

  useEffect(() => {
    if (debouncedSearchValue) {
      dispatch(fetchMovieSearch(debouncedSearchValue, DEFAULT_FIRST_PAGE));
      dispatch(fetchPersonSearch(debouncedSearchValue, DEFAULT_FIRST_PAGE));
    }
  }, [dispatch, debouncedSearchValue]);

  let suggestions = [
    ...movies.map(movie => ({...movie, suggestionType: 'movie'})),
    ...people.map(person => ({...person, suggestionType: 'person'})),
  ];

  suggestions = suggestions.sort((a, b) =>
    a[a.suggestionType === 'movie' ? 'title' : 'name'].localeCompare(
      b[b.suggestionType === 'movie' ? 'title' : 'name'],
    ),
  );

  return (
    <ScreenRoot afterInteractions>
      <Spinner loading={isFetchingMovies || isFetchingPeople}>
        <BaseFlatList
          keyExtractor={item => item.id.toString()}
          data={suggestions}
          renderItem={({item: suggestion}) =>
            suggestion.suggestionType === 'movie' ? (
              <MovieListItem movieId={suggestion.id} />
            ) : (
              <PersonListItem personId={suggestion.id} />
            )
          }
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent=""
          showSeparators
        />
      </Spinner>
    </ScreenRoot>
  );
}

MovieAndPersonSearch.navigationOptions = {
  headerTitle: <MovieAndPersonSearchBar />,
};

export default MovieAndPersonSearch;
