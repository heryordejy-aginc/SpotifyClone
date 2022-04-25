import React, { Fragment, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Animated,
  Text,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import SmallPlayerCard from '../../components/small-player-card';
import { appColors } from '../../styles/colors';
import NowPlayingHead from '../../components/now-playing-head';
import NowPlayingItem from '../../components/now-playing-item';
import { notchHeight, screenHeight } from '../../utils/dimens';
import { opacity } from 'react-native-reanimated/src/reanimated2/Colors';
import moment from 'moment';
import { fontFamily } from '../../styles/font';
import { tracks } from '../../utils/tracks';
import TrackPlayer from 'react-native-track-player';
import { addAllTracksAction } from '../../store/actions/player-actions';
import { useSelector, useDispatch } from 'react-redux';

export default function NowPlaying() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const playerStore = useSelector(state => state?.player);
  const dispatch = useDispatch();

  useEffect(() => {
    addAllTracksAction([...tracks])(dispatch);
    TrackPlayer.add([...tracks]);
  }, [tracks]);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, screenHeight * 0.6],
    outputRange: [screenHeight * 0.55, screenHeight * 0.12],
    extrapolate: 'clamp',
  });

  const playPosition = scrollY.interpolate({
    inputRange: [0, screenHeight * 0.6],
    outputRange: [
      screenHeight * 0.55 - notchHeight - 30,
      screenHeight * 0.12 - notchHeight,
    ],
    extrapolate: 'clamp',
  });

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, screenHeight * 0.6],
    outputRange: [0, -(screenHeight * 0.3)],
    extrapolate: 'clamp',
  });

  const albumArtHeight = scrollY.interpolate({
    inputRange: [0, screenHeight * 0.6],
    outputRange: [screenHeight * 0.28, 0],
    extrapolate: 'clamp',
  });

  const albumArtOpacity = scrollY.interpolate({
    inputRange: [0, screenHeight * 0.4],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const headerTitleSize = scrollY.interpolate({
    inputRange: [0, screenHeight * 0.4],
    outputRange: [24, 15],
    extrapolate: 'clamp',
  });

  const renderListFooter = () => (
    <View style={styles.listBottom}>
      <View style={styles.albumDateWrapper}>
        <Text style={styles.artistTitle}>
          {moment().format('MMMM DD, YYYY')}
        </Text>
        <Text style={styles.artistSubtitle}>
          18 songs<Text style={styles.dot}> • </Text>
          58 min 24 secs
        </Text>
      </View>
      <View style={[styles.artist]}>
        <Image
          source={{
            uri: 'https://img.a.transfermarkt.technology/portrait/big/8198-1631656078.jpg?lm=1',
          }}
          style={styles.avatar}
        />
        <Text style={styles.title}>Kid Cudi</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#d44973', appColors.Black]}
        style={styles.linearGradient}
        locations={[0.2, 0.58]}
      >
        <NowPlayingHead
          containerStyles={{
            transform: [{ translateY: headerTranslateY }],
            // height: headerHeight,
          }}
          headerHeight={headerHeight}
          albumArtHeight={albumArtHeight}
          albumArtOpacity={albumArtOpacity}
          headerTitleSize={headerTitleSize}
          playPosition={playPosition}
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={[...tracks]}
          renderItem={({ item, index }) => (
            <NowPlayingItem {...item} index={index} />
          )}
          contentContainerStyle={styles.content}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: scrollY } },
              },
            ],
            {
              listener: event => {},
              useNativeDriver: false,
            },
          )}
          ListFooterComponent={renderListFooter()}
        />
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
    paddingHorizontal: 10,
    backgroundColor: appColors.Black,
  },
  linearGradient: {
    flex: 1,
  },
  listBottom: {
    padding: 20,
  },
  artistTitle: {
    fontSize: 13,
    fontFamily: fontFamily.Medium,
  },
  artistSubtitle: {
    fontSize: 13,
    fontFamily: fontFamily.Light,
  },
  dot: {
    fontSize: 10,
    fontFamily: fontFamily.Light,
  },
  artist: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 15,
  },
  title: {
    fontSize: 15,
    fontFamily: fontFamily.Medium,
  },
});
