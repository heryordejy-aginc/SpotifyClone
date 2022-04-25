import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import { screenHeight, vh } from '../utils/dimens';
import { fontFamily } from '../styles/font';
import ArtistCardSmall from './artist-card-small';

export default function ArtistCardSmallList() {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={[...Array(6).keys()]}
      renderItem={({ index }) => <ArtistCardSmall lastCard={index === 5} />}
      keyExtractor={index => `${index}`}
      numColumns={2}
      centerContent={true}
      style={styles.container}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  leftWrapper: {
    width: '30%',
    height: '100%',
  },
  rightWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
    flex: 1,
    // aspectRatio: '1, 2',
  },
  artist: {
    fontSize: 16,
    fontFamily: fontFamily.Medium,
  },
});
