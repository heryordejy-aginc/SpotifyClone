import React, { Fragment } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import HeaderMain from '../../components/header-main';
import ArtistCardSmall from '../../components/artist-card-small';
import ArtistCardSmallList from '../../components/artist-card-small-list';
import ListenHereCard from '../../components/listen-here-card';
import PopularShowsList from '../../components/popular-shows-list';
import SmallPlayerCard from '../../components/small-player-card';

export default function HomeIndex() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#c04e4e', '#171717FF']}
        style={styles.linearGradient}
        useAngle={true}
        angle={120}
        angleCenter={{ x: 0, y: 0 }}
        locations={[0.1, 0.7]}
      >
        <View style={styles.content}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={[]}
            renderItem={() => {}}
            ListHeaderComponent={
              <Fragment>
                <HeaderMain
                  title={'Good evening'}
                  icons={{ showRecent: true, showSettings: true }}
                />
                <ArtistCardSmallList />
                <ListenHereCard />
                <PopularShowsList />
              </Fragment>
            }
          />
        </View>
      </LinearGradient>
      <SmallPlayerCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#090909',
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
