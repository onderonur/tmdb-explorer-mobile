import React, {useEffect, useCallback, useRef, useState} from 'react';
import {DEFAULT_FIRST_PAGE} from '../reducers/higherOrderReducers/createPagination';
import BaseFlatList from './BaseFlatList';
import ActionButton from 'react-native-action-button';
import {Icon} from 'react-native-elements';

const TO_TOP_BUTTON_MIN_OFFSET = 300;

function renderScrollToTopIcon() {
  return <Icon type="material" name="keyboard-arrow-up" color="#fff" />;
}

function InfiniteFlatList({
  data,
  keyExtractor,
  loading,
  nextPage,
  onFetchPage,
  minItemWidth,
  ...rest
}) {
  const listRef = useRef();
  const [showToTopButton, setShowToTopButton] = useState(false);

  useEffect(() => {
    onFetchPage(DEFAULT_FIRST_PAGE);
  }, [onFetchPage]);

  const handleReachEnd = useCallback(() => {
    if (nextPage) {
      onFetchPage(nextPage);
    }
  }, [onFetchPage, nextPage]);

  const scrollToTop = () => {
    listRef.current.scrollToOffset({animated: true, offset: 0});
  };

  const onScroll = useCallback(e => {
    const offsetY = e.nativeEvent.contentOffset.y;
    if (offsetY > TO_TOP_BUTTON_MIN_OFFSET) {
      setShowToTopButton(true);
    } else {
      setShowToTopButton(false);
    }
  }, []);

  const hasNextPage = !!nextPage;

  return (
    <>
      <BaseFlatList
        ref={listRef}
        data={data}
        keyExtractor={keyExtractor}
        onEndReached={handleReachEnd}
        loading={loading || hasNextPage}
        onScroll={onScroll}
        minItemWidth={minItemWidth}
        {...rest}
      />
      {/* TODO: Will add fade in/out animation to the button */}
      {showToTopButton && (
        <ActionButton
          buttonColor="tomato"
          onPress={scrollToTop}
          renderIcon={renderScrollToTopIcon}
        />
      )}
    </>
  );
}

export default InfiniteFlatList;
