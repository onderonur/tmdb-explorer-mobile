import React from 'react';
import InfiniteFlatList from '../components/InfiniteFlatList';
import MovieCard from '../containers/MovieCard';

const minItemWidth = 160;

function renderItem({item: movieId}) {
  return <MovieCard movieId={movieId} />;
}

function MovieCardInfiniteList({
  data,
  onFetchPage,
  isFetching,
  nextPage,
  onRefresh,
}) {
  return (
    <InfiniteFlatList
      data={data}
      renderItem={renderItem}
      nextPage={nextPage}
      loading={isFetching}
      onFetchPage={onFetchPage}
      minItemWidth={minItemWidth}
      // TODO: May handle "refreshing" some other way
      refreshing={false}
      onRefresh={onRefresh}
    />
  );
}

export default MovieCardInfiniteList;
