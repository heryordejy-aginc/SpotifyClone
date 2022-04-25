import React, { Fragment } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import HeaderMain from '../../components/header-main';
import ArtistCardSmall from '../../components/artist-card-small';
import ArtistCardSmallList from '../../components/artist-card-small-list';
import ListenHereCard from '../../components/listen-here-card';
import PopularShowsList from '../../components/popular-shows-list';
import SmallPlayerCard from '../../components/small-player-card';
import RecentlyPlayedItem from '../../components/recently-played-item';
import RecentlyPlayedList from '../../components/recently-played-list';
import { appColors } from '../../styles/colors';
import JumpBackList from '../../components/jump-back-list';
import PorpularNewList from '../../components/porpular-new-list';

export default function RecentlyPlayed() {
  return (
    <View style={styles.container}>
      {/*<View style={styles.content}>*/}
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={[]}
        renderItem={() => {}}
        ListHeaderComponent={
          <Fragment>
            <HeaderMain />
            <RecentlyPlayedList />
            <JumpBackList />
            <PorpularNewList />
          </Fragment>
        }
      />
      {/*</View>*/}
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
    // flex: 1,
    // paddingHorizontal: 10,
  },
  linearGradient: {
    flex: 1,
  },
});
