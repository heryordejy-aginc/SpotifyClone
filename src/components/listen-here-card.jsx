import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { screenHeight, vh } from '../utils/dimens';
import { fontFamily } from '../styles/font';
import { appIcons } from '../assets/icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ListenHereCard(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftWrapper}>
        <Image
          source={require('../assets/images/wani-buju.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.rightWrapper}>
        <TouchableOpacity style={styles.menuIcon}>
          <Ionicons
            name={'ios-ellipsis-horizontal-sharp'}
            color={'#FFFFFF99'}
            size={20}
          />
        </TouchableOpacity>
        <Text style={styles.artist}>
          Wani features Buju on his latest single 'Times Two (x2)'. Listen here.
        </Text>
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
    height: screenHeight * 0.25,
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  leftWrapper: {
    width: '45%',
    height: '100%',
  },
  rightWrapper: {
    justifyContent: 'space-between',
    // alignItems: 'center',
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  image: {
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
    flex: 1,
    // aspectRatio: '1, 2',
  },
  artist: {
    fontSize: 17,
    fontFamily: fontFamily.Medium,
  },
  menuIcon: {
    alignItems: 'flex-end',
  },
});
