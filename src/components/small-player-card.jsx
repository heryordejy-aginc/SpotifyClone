import React, { Fragment, useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import { screenHeight, screenWidth, vh } from '../utils/dimens';
import { fontFamily } from '../styles/font';
import { appIcons } from '../assets/icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import { appColors } from '../styles/colors';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useProgress } from 'react-native-track-player';

export default function SmallPlayerCard(props) {
  const navigation = useNavigation();

  const playerStore = useSelector(state => state?.player);
  const { currentTrack } = playerStore;
  const dispatch = useDispatch();

  const { trackIndex, trackObject, position, duration } = currentTrack ?? {};
  // console.log(`\n\n\ncurrentTrack\t\t`, currentTrack);
  const progress = useProgress();
  let sliderWidth = 20;

  const [current_track, setCurrent_track] = useState({
    trackIndex: null,
    position: null,
    duration: null,
  });

  useEffect(() => {
    setCurrent_track(currentTrack);
  }, [dispatch]);

  return (
    !!currentTrack && (
      <View>
        <View style={styles.container}>
          {/* <Slider*/}
          {/*  style={{ width: '100%', borderWidth: 4 }}*/}
          {/*  minimumValue={0}*/}
          {/*  maximumValue={trackObject?.duration}*/}
          {/*  minimumTrackTintColor={appColors.White}*/}
          {/*  maximumTrackTintColor={appColors.White}*/}
          {/*  thumbTintColor={appColors.White}*/}
          {/*  value={progress.position}*/}
          {/*/>*/}
          <Animated.View style={[styles.slider, { width: sliderWidth }]} />
          <TouchableOpacity
            style={styles.leftWrapper}
            onPress={() => navigation.navigate('NowPlayingFull')}
          >
            <View style={styles.imageWrapper}>
              <Image
                source={{ uri: currentTrack?.artwork }}
                style={styles.image}
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>{currentTrack?.title}</Text>
              <Text style={styles.artist}>{currentTrack?.artist}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.rightWrapper}>
            <MaterialCommunityIcons
              name={'cellphone-link'}
              color={'#FFFFFF'}
              size={30}
              onPress={() => {}}
            />
            <TouchableOpacity style={styles.playButton}>
              <MaterialCommunityIcons
                name={'play'}
                color={'#FFFFFF'}
                size={30}
                onPress={() => {}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    height: screenHeight * 0.09,
    elevation: 3,
    backgroundColor: appColors.Gray2,
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingTop: 2,
  },
  imageWrapper: {
    // width: screenWidth * 0.2,
    height: '100%',
    flex: 0,
  },
  rightWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.3,
    paddingHorizontal: 10,
  },
  image: {
    // resizeMode: 'center',
    width: undefined,
    height: undefined,
    flex: 1,
    aspectRatio: 1 / 1,
  },
  artist: {
    fontSize: 14,
    fontFamily: fontFamily.Light,
  },
  title: {
    fontFamily: fontFamily.Medium,
    fontSize: 14,
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  slider: {
    // ...StyleSheet.absoluteFillObject,
    width: screenWidth * 0.4,
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',

    position: 'absolute',
    top: 0,
    left: 0,
  },
  sliderWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: screenWidth,
    backgroundColor: 'transparent',
  },
  playButton: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    marginLeft: 10,
  },
});

const _ = {
  album: '',
  artist: 'The Epic Hero',
  artwork: 'https://picsum.photos/id/1003/200/300',
  duration: 149,
  id: '1',
  position: 18.244,
  t: 0,
  title: 'Keys of moon',
  trackIndex: 0,
  url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
};
