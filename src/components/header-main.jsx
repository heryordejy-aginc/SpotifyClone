import React, { Fragment } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { notchHeight } from '../utils/dimens';
import { appIcons } from '../assets/icons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function HeaderMain(props) {
  const navigation = useNavigation();

  const renderRight = () => (
    <View style={styles.renderRight}>
      {props?.icons?.showRecent && (
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => navigation.navigate('RecentlyPlayed')}
        >
          <Image source={appIcons.RecentPlayed} style={styles.icon} />
        </TouchableOpacity>
      )}
      {props?.icons?.showSettings && (
        <TouchableOpacity style={styles.iconWrapper}>
          <Image source={appIcons.Settings} style={styles.icon} />
        </TouchableOpacity>
      )}
      {props?.icons?.showSearch && (
        <TouchableOpacity style={styles.iconWrapper}>
          <Image source={appIcons.Search} style={styles.icon} />
        </TouchableOpacity>
      )}
      {props?.icons?.showPlus && (
        <TouchableOpacity style={styles.iconWrapper}>
          <AntDesign name={'plus'} size={30} color={'#FFFFFF'} />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <Fragment>
      <StatusBar
        translucent={true}
        barStyle={props.barStyle ?? 'light-content'}
        backgroundColor={'transparent'}
      />
      <View style={styles.container}>
        <View style={styles.leftWrapper}>
          {props?.icons?.showAvatar && (
            <TouchableOpacity style={styles.avatarWrapper}>
              <Image
                source={{
                  uri: 'https://img.a.transfermarkt.technology/portrait/big/8198-1631656078.jpg?lm=1',
                }}
                style={styles.avatar}
              />
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.rightWrapper}>{renderRight()}</View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: notchHeight + 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  renderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 22,
  },
  iconWrapper: {
    paddingLeft: 25,
  },
  icon: {
    width: 25,
    height: 25,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 30,
  },
  avatarWrapper: {
    paddingRight: 10,
  },
});
