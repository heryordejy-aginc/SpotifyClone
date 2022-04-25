import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { screenHeight, screenWidth, vh } from '../utils/dimens';
import { fontFamily } from '../styles/font';
import { appIcons } from '../assets/icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { appColors } from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function YourPlaylistItem(props) {
  const renderSubtitleIcon = () =>
    props.pin ? (
      <MaterialCommunityIcons name={'pin'} color={appColors.Green} />
    ) : (
      <Ionicons name={'arrow-down-circle'} color={appColors.Green} />
    );

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('NowPlaying')}
    >
      <View style={styles.leftWrapper}>
        {props.lastCard ? (
          <Image source={appIcons.LikedSongsBg} style={styles.image} />
        ) : (
          <Image
            source={require('../assets/punjabi.jpeg')}
            style={styles.image}
          />
        )}
      </View>
      <View style={styles.rightWrapper}>
        <Text style={styles.title}>Asake </Text>
        <Text style={styles.subtitle}>{renderSubtitleIcon()} Asake </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: '49%',
    overflow: 'hidden',
    height: screenHeight * 0.09,
    // elevation: 3,
    // backgroundColor: appColors.Gray,
    marginBottom: 10,
  },
  leftWrapper: {
    width: screenWidth * 0.2,
    height: '100%',
  },
  rightWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },
  image: {
    // resizeMode: 'center',
    width: undefined,
    height: undefined,
    flex: 1,
    aspectRatio: 2 / 2,
  },
  title: {
    fontSize: 18,
    fontFamily: fontFamily.Medium,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: fontFamily.Light,
  },
});
