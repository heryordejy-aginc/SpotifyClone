import React, { Fragment, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Fontisto';
import AppPlayer from '../utils/app-player';
import styles from '../styles/general';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { appColors } from '../styles/colors';
import { tracks } from '../utils/tracks';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAllTracksAction,
  loadCurrentAction,
} from '../store/actions/player-actions';
import { flattenObject } from '../utils/data-format';

// type compProps = {
//   track: TrackPlayer.Track;
//   onNextPrevPress: (p: 'prev' | 'next') => void;
// };

const AudioPlayer = () => {
  const playerStore = useSelector(state => state?.player);
  const dispatch = useDispatch();

  const { progrsBarSection, playPauseButton, playPauseIcon } = styles;

  const progress = useProgress();
  const [isPlaying, setPlaying] = useState(true);
  const [currentTrack, setCurrentTrack] = useState({
    trackIndex: null,
    trackObject: null,
    position: null,
    duration: null,
  });

  const toggleIsPlaying = () => setPlaying(prev => !prev);

  useEffect(() => {
    if (!!playerStore?.allTracks === false) {
      addAllTracksAction([...tracks])(dispatch);
      TrackPlayer.add([...tracks]);
      TrackPlayer.play();
    }
    if (playerStore?.trackMode !== 'play') {
      setPlaying(true);
    }
  }, [tracks]);

  const onPlayPausePress = async () => {
    const state = await TrackPlayer.getState();
    toggleIsPlaying();

    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  const getTrackProps = async () => {
    let trackIndex = await TrackPlayer.getCurrentTrack();
    let trackObject = await TrackPlayer.getTrack(trackIndex);

    const position = await TrackPlayer.getPosition();
    const duration = await TrackPlayer.getDuration();
    return {
      trackIndex,
      trackObject,
      position,
      duration,
      t: await TrackPlayer.getCurrentTrack(),
    };
  };

  const onNextPress = async () => {
    if (!!trackIndex) {
      await TrackPlayer.skipToNext().then(() =>
        getTrackProps().then(res => {
          loadCurrentAction({ ...flattenObject(res) })(dispatch);
          setCurrentTrack({ ...res });
        }),
      );
    }
  };

  const onPrevPress = async () => {
    if (!!trackIndex) {
      await TrackPlayer.skipToNext().then(() =>
        getTrackProps().then(res => {
          loadCurrentAction({ ...flattenObject(res) })(dispatch);
          setCurrentTrack({ ...res });
        }),
      );
    }
  };

  const playOrPauseIcon = isPlaying ? 'pause-circle' : 'play-circle';

  useEffect(() => {
    getTrackProps().then(res => {
      loadCurrentAction({ ...flattenObject(res) })(dispatch);
      setCurrentTrack({ ...res });
    });
  }, [TrackPlayer.getCurrentTrack]);

  const { trackIndex, trackObject, position, duration } = currentTrack;
  return (
    <Fragment>
      <View style={{}}>
        {/* <View style={{}}>
          <View style={{}}>
            <View>
              <Text style={trackTitle}>{track.title}</Text>
            </View>
            <View>
              <Text style={trackSubtitle}>
                {track.artist || track.album || 'unknown'}
              </Text>
            </View>
          </View>
        </View> */}
        {/*  track info */}
        <View style={styles.trackInfo}>
          <View>
            <Text style={styles.tracktitle}>{trackObject?.title}</Text>
            <Text style={styles.trackArtist}>
              {trackObject?.artist || trackObject?.album || 'unknown'}
            </Text>
          </View>
          <MaterialCommunityIcons
            name={'heart-outline'}
            color={appColors.White}
            size={30}
          />
        </View>

        {/* track slider */}
        <View style={progrsBarSection}>
          <Slider
            style={{ width: '100%', borderWidth: 4 }}
            minimumValue={0}
            maximumValue={trackObject?.duration}
            minimumTrackTintColor={appColors.White}
            maximumTrackTintColor={appColors.White}
            thumbTintColor={appColors.White}
            value={progress.position}
          />
          <View style={styles.trackTimerWrapper}>
            <Text style={styles.trackTimer}>
              {AppPlayer.secondsToHHMMSS(Math.floor(progress.position || 0))}
            </Text>
            <Text style={styles.trackTimer}>
              {AppPlayer.secondsToHHMMSS(trackObject?.duration || 0)}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.controllers}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="ios-shuffle" size={22} color={appColors.White} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPrevPress}>
          <Icon name="step-backwrad" size={22} color={appColors.White} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlayPausePress} style={playPauseButton}>
          <Ionicons name={playOrPauseIcon} size={80} style={playPauseIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onNextPress}>
          <Icon name="step-forward" size={22} color={appColors.White} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Feather name="repeat" size={18} color={appColors.White} />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default AudioPlayer;
