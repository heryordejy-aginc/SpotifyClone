import React, { Fragment } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { screenHeight, screenWidth, vh } from '../utils/dimens';
import { fontFamily } from '../styles/font';
import { appIcons } from '../assets/icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import { appColors } from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TrackPlayer from 'react-native-track-player';
import { loadCurrentAction } from '../store/actions/player-actions';
import { flattenObject } from '../utils/data-format';
import { useDispatch, useSelector } from 'react-redux';

export default function NowPlayingItem(props) {
  const playerStore = useSelector(state => state?.player);
  const dispatch = useDispatch();

  const onSelectTrack = async () => {
    await TrackPlayer.skip(Number(props.index)).then(() => {
      loadCurrentAction({ ...flattenObject({ ...props }) })(dispatch);
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onSelectTrack}>
      <View style={styles.leftWrapper}>
        <View style={styles.content}>
          <Text style={styles.title}>{props.title}</Text>
          <View style={styles.flexRow}>
            <Ionicons
              name={'md-arrow-down-circle'}
              color={appColors.Green}
              size={13}
            />
            <Text style={styles.artist}>{props.artist}</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightWrapper}>
        <Ionicons
          name={'ios-ellipsis-horizontal-sharp'}
          color={'#FFFFFF99'}
          size={20}
        />
        {/*<Image source={appIcons.More} style={styles.icon} />*/}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    height: screenHeight * 0.09,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rightWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  artist: {
    fontSize: 14,
    fontFamily: fontFamily.Light,
    marginLeft: 5,
  },
  title: {
    fontFamily: fontFamily.Medium,
    fontSize: 16,
  },
  content: {},
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
