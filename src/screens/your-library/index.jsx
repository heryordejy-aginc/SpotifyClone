import React, { Fragment } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import HeaderMain from '../../components/header-main';
import ArtistCardSmall from '../../components/artist-card-small';
import ArtistCardSmallList from '../../components/artist-card-small-list';
import ListenHereCard from '../../components/listen-here-card';
import PopularShowsList from '../../components/popular-shows-list';
import SmallPlayerCard from '../../components/small-player-card';
import YourLibraryCategory from '../../components/your-library-category';
import YourPlaylistList from '../../components/your-playlist-list';
import { appColors } from '../../styles/colors';

export default function YourLibraryIndex() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Fragment>
          <View style={styles.headerWrapper}>
            <HeaderMain
              title={'Your Library'}
              icons={{
                showSearch: true,
                showAvatar: true,
                showPlus: true,
              }}
            />
            <YourLibraryCategory />
          </View>
          <YourPlaylistList />
        </Fragment>
      </View>
      <SmallPlayerCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.Black,
    flex: 1,
  },
  content: {
    flex: 1,
    // paddingHorizontal: 10,
  },
  linearGradient: {
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: appColors.Black,
    elevation: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
  },
});
