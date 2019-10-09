import React, {useCallback} from 'react';
import {FlatList, View, Dimensions} from 'react-native';
import Spinner from './Spinner';
import BaseText from './BaseText';
import {Divider} from 'react-native-elements';

const WINDOW_WIDTH = Dimensions.get('window').width;
const DEFAULT_KEY_EXTRACTOR = id => id.toString();

const BaseFlatList = React.forwardRef(
  (
    {
      keyExtractor = DEFAULT_KEY_EXTRACTOR,
      loading,
      ListEmptyComponent = 'Nothing has been found',
      showSeparators,
      renderItem,
      minItemWidth,
      ...rest
    },
    ref,
  ) => {
    const getNumColumns = useCallback(() => {
      return minItemWidth ? Math.floor(WINDOW_WIDTH / minItemWidth) : undefined;
    }, [minItemWidth]);

    const handleRenderItem = useCallback(
      ({item, index, separator}) => {
        if (!minItemWidth) {
          return renderItem({item, index, separator});
        }

        const defaultMargin = 4;

        const numColumns = getNumColumns();

        // Decreasing the item width as 2 * margin
        const width = Math.floor(WINDOW_WIDTH / numColumns) - 2 * defaultMargin;
        const marginVertical = defaultMargin;
        const marginHorizontal = numColumns > 1 ? defaultMargin : 0;

        const style = {
          width,
          marginHorizontal,
          marginVertical,
        };

        return (
          <View style={style}>{renderItem({item, index, separator})}</View>
        );
      },
      [getNumColumns, minItemWidth, renderItem],
    );

    return (
      <FlatList
        ref={ref}
        keyExtractor={keyExtractor}
        renderItem={handleRenderItem}
        numColumns={getNumColumns()}
        ItemSeparatorComponent={() => (showSeparators ? <Divider /> : null)}
        ListFooterComponent={loading && <Spinner loading />}
        ListEmptyComponent={
          !loading ? (
            typeof ListEmptyComponent === 'string' ? (
              <BaseText style={{padding: 12}}>{ListEmptyComponent}</BaseText>
            ) : (
              ListEmptyComponent
            )
          ) : null
        }
        {...rest}
      />
    );
  },
);

export default BaseFlatList;
