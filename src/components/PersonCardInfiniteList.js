import React from 'react';
import PersonCard from '../containers/PersonCard';
import {SafeAreaView} from 'react-native';
import InfiniteFlatList from '../components/InfiniteFlatList';

const minItemWidth = 160;

function renderItem({item: personId}) {
  return <PersonCard personId={personId} />;
}

function PersonCardInfiniteList({
  data,
  isFetching,
  nextPage,
  onFetchPage,
  onRefresh,
}) {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}

export default PersonCardInfiniteList;
