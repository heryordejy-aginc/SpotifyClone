import React, { Fragment } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import { appColors } from '../styles/colors';
import { appIcons } from '../assets/icons';
import { notchHeight, screenHeight } from '../utils/dimens';
import Feather from 'react-native-vector-icons/Feather';
import { fontFamily } from '../styles/font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SLI from 'react-native-vector-icons/SimpleLineIcons';

export default function NowPlayingHead(props) {
  return (
    <>
      <Animated.View
        style={{ ...styles.container, height: props.headerHeight }}
      >
        <StatusBar
          translucent={true}
          barStyle={props.barStyle ?? 'light-content'}
          backgroundColor={'transparent'}
        />
        <TouchableOpacity style={styles.arrowBackButton}>
          <Feather name={'chevron-left'} size={30} color={appColors.White} />
        </TouchableOpacity>
        <Animated.View style={[styles.content, props.containerStyles]}>
          <View style={styles.topWrapper}>
            <View style={styles.imageWrapper}>
              <Animated.Image
                source={require('../assets/images/now-playing.png')}
                style={[styles.image, { opacity: props.albumArtOpacity }]}
              />
            </View>
            <View>
              <Animated.Text
                style={[
                  styles.headerTitle,
                  { fontSize: props.headerTitleSize },
                ]}
              >
                Man On The Moon III:The Chosen
              </Animated.Text>
            </View>
            <Animated.View
              style={[styles.artist, { opacity: props.albumArtOpacity }]}
            >
              <Image
                source={{
                  uri: 'https://img.a.transfermarkt.technology/portrait/big/8198-1631656078.jpg?lm=1',
                }}
                style={styles.avatar}
              />
              <Text style={styles.title}> Asake </Text>
            </Animated.View>
            <Animated.Text
              style={[styles.date, { opacity: props.albumArtOpacity }]}
            >
              {' '}
              Album <Text style={styles.dot}> • </Text> 2020{' '}
            </Animated.Text>
          </View>
          <Animated.View
            style={[styles.menu, { opacity: props.albumArtOpacity }]}
          >
            <View style={styles.menuLeft}>
              <Ionicons
                name={'ios-heart-outline'}
                size={30}
                color={appColors.White}
                style={styles.icon}
              />
              <SLI
                name={'arrow-down-circle'}
                size={25}
                color={appColors.White}
                style={styles.icon}
              />
              <Ionicons
                name={'ios-ellipsis-horizontal'}
                size={30}
                color={appColors.White}
                style={styles.icon}
              />
            </View>
          </Animated.View>
        </Animated.View>
      </Animated.View>
      <Animated.View style={[styles.menuRight, { top: props.playPosition }]}>
        <View style={styles.menuRightWrapper}>
          <Image source={appIcons.PlayGreen} style={styles.playIcon} />
          <View style={styles.shuffleIcon}>
            <Ionicons name={'shuffle'} color={appColors.Green} size={15} />
          </View>
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: notchHeight,
  },
  content: {
    paddingHorizontal: 10,
    paddingTop: notchHeight + 5,
    height: screenHeight * 0.6,
  },
  arrowBackButton: {
    position: 'absolute',
    top: notchHeight * 2,
    left: 20,
    zIndex: 1000,
  },
  arrowBack: { tintColor: appColors.White },
  topWrapper: {
    // alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
  },
  imageWrapper: {
    // width: screenHeight * 0.3,
    // height: screenHeight * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    // width: undefined,
    // height: undefined,
    // flex: 1,
    width: screenHeight * 0.28,
    height: screenHeight * 0.28,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: fontFamily.Bold,
    paddingVertical: 15,
    textAlign: 'center',
  },
  artist: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 15,
    fontFamily: fontFamily.Medium,
  },
  date: {
    fontSize: 15,
    fontFamily: fontFamily.Light,
    marginVertical: 15,
  },
  dot: {
    fontSize: 10,
    fontFamily: fontFamily.Light,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  icon: {
    // width: 30,
    // height: 30,
    marginRight: 10,
    resizeMode: 'contain',
  },
  menuRightWrapper: {
    width: 60,
    height: 60,
  },
  playIcon: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
  },
  shuffleIcon: {
    width: 20,
    height: 20,
    borderRadius: 30,
    backgroundColor: appColors.Gray,
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  menuRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 1000000,
  },
});
