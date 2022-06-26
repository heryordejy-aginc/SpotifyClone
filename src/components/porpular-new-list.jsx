import React, { Fragment } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import { screenHeight, vh } from '../utils/dimens';
import { fontFamily } from '../styles/font';
import ArtistCardSmall from './artist-card-small';
import PopularShowsItem from './popular-shows-item';
import RecentlyPlayedItem from './recently-played-item';
import PorpularNewItem from './porpular-new-item';

export default function PorpularNewList(props) {
  const renderHeader = () => (
    <View>
      <Text style={styles.headerTitle}>Porpular new release</Text>
    </View>
  );

  return (
    <Fragment>
      {renderHeader()}
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        data={[...Array(6).keys()]}
        renderItem={({ index }) => <PorpularNewItem />}
        keyExtractor={index => `${index}`}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    marginBottom: 20,
  },
  contentContainer: {
    paddingLeft: 10,
  },
  headerTitle: {
    fontSize: 21,
    fontFamily: fontFamily.Bold,
    paddingHorizontal: 10,
  },
});
