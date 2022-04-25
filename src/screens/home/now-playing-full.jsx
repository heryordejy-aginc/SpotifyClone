import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import HeaderMain from '../../components/header-main';
import ArtistCardSmall from '../../components/artist-card-small';
import ArtistCardSmallList from '../../components/artist-card-small-list';
import ListenHereCard from '../../components/listen-here-card';
import PopularShowsList from '../../components/popular-shows-list';
import SmallPlayerCard from '../../components/small-player-card';
import { appColors } from '../../styles/colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { notchHeight, screenHeight, screenWidth } from '../../utils/dimens';
import { fontFamily } from '../../styles/font';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontiso from 'react-native-vector-icons/Fontisto';
import Slider from '@react-native-community/slider';
import AudioPlayer from '../../components/track-player';
import { tracks } from '../../utils/tracks';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

export default function NowPlayingFull(props) {
  const [nowPlaying, setNowPlaying] = useState(tracks[0]);
  const navigation = useNavigation();

  const playerStore = useSelector(state => state?.player);
  const { currentTrack } = playerStore;
  const dispatch = useDispatch();

  // console.log(`\n\n\nplayerStore\t\t`, playerStore);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />

      <LinearGradient
        colors={['#d44973', '#2a0f17']}
        style={styles.linearGradient}
        locations={[0.2, 0.7]}
      >
        <View style={styles.content}>
          {/*  header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name={'chevron-down'}
                color={appColors.White}
                size={30}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{currentTrack?.artist}</Text>
            <TouchableOpacity>
              <Ionicons
                name={'ios-ellipsis-horizontal-sharp'}
                color={appColors.White}
                size={15}
              />
            </TouchableOpacity>
          </View>

          {/*  album art */}
          <View style={styles.imageWrapper}>
            <Animated.Image
              source={{ uri: currentTrack?.artwork }}
              style={[styles.image]}
            />
          </View>

          {/*  track info */}
          {/* <View style={styles.trackInfo}>
            <View>
              <Text style={styles.tracktitle}>Another Day</Text>
              <Text style={styles.trackArtist}>IceKudi</Text>
            </View>
            <MaterialCommunityIcons
              name={'heart-outline'}
              color={appColors.White}
              size={30}
            />
          </View> */}

          {/*  track player */}
          <View style={styles.player}>
            <AudioPlayer />
          </View>

          <View style={styles.playlistBottom}>
            <MaterialCommunityIcons
              name={'cellphone-link'}
              color={'#FFFFFF'}
              size={24}
              onPress={() => {}}
            />
            <Fontiso name="play-list" color={'#fff'} size={16} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#090909',
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: notchHeight + 20,
    // flex: 1,
    // paddingHorizontal: 10,
  },
  linearGradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trackInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: fontFamily.Medium,
    fontSize: 16,
  },
  tracktitle: {
    fontFamily: fontFamily.Bold,
    fontSize: 22,
  },
  trackArtist: {
    fontFamily: fontFamily.Book,
    fontSize: 18,
  },
  imageWrapper: {
    width: screenWidth - 40,
    height: screenWidth - 40,
    marginVertical: notchHeight,
    elevation: 4,
  },
  image: {
    width: undefined,
    height: undefined,
    flex: 1,
  },
  player: {
    marginBottom: 20,
  },
  playlistBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
