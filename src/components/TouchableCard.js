import React, {useState} from 'react';
import {getImageUrl} from '../utils';
import {Icon, Image} from 'react-native-elements';
import {View} from 'react-native';
import Spinner from '../components/Spinner';
import useReactNativeElementsTheme from '../hooks/useReactNativeElementsTheme';
import BaseText from './BaseText';
import BaseTouchableNativeFeedback from './BaseTouchableNativeFeedback';

// TODO: Will add placeholder to empty images
function TouchableCard({
  title,
  featuredTitle,
  imageSrc,
  imageAspectRatio = 1 / 1,
  width = '100%',
  onPress,
}) {
  const [imageLoadFailed, setImageLoadFailed] = useState(false);
  const {theme} = useReactNativeElementsTheme();

  return (
    <BaseTouchableNativeFeedback
      useForeground
      onPress={onPress}
      style={{shadowColor: 'red'}}>
      <View style={{width}}>
        <View>
          <Image
            source={{uri: getImageUrl(imageSrc)}}
            style={{aspectRatio: imageAspectRatio}}
            onError={() => setImageLoadFailed(true)}
            PlaceholderContent={
              imageLoadFailed ? (
                <Icon type="material" name="image" />
              ) : (
                <Spinner loading />
              )
            }
          />
        </View>
        {title || featuredTitle ? (
          <View style={{padding: 8}}>
            {title ? (
              <BaseText
                numberOfLines={2}
                h3
                h3Style={{
                  fontSize: 18,
                  // textAlign: 'center',
                  paddingHorizontal: 4,
                }}>
                {title}
              </BaseText>
            ) : null}
            {featuredTitle ? (
              <BaseText
                numberOfLines={2}
                h4
                h4Style={{
                  fontSize: 16,
                  color: theme.colors.grey3,
                  paddingHorizontal: 4,
                }}>
                {featuredTitle}
              </BaseText>
            ) : null}
          </View>
        ) : null}
      </View>
    </BaseTouchableNativeFeedback>
  );
}

export default TouchableCard;
