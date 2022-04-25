import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import { notchHeight, screenHeight, vh } from '../utils/dimens';
import { fontFamily } from '../styles/font';
import ArtistCardSmall from './artist-card-small';
import YourPlaylistItem from './your-playlist-item';

export default function YourPlaylistList() {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={[...Array(16).keys()]}
      renderItem={({ index }) => <YourPlaylistItem pin={index < 5} />}
      keyExtractor={index => `${index}`}
      style={styles.container}
      contentContainerStyle={styles.content}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  content: { paddingBottom: notchHeight },
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
