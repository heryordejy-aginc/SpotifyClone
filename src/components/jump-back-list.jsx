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
import JumpBackItem from './jump-back-item';

export default function JumpBackList(props) {
  const renderHeader = () => (
    <View>
      <Text style={styles.headerTitle}>Jump back in</Text>
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
        renderItem={({ index }) => <JumpBackItem />}
        keyExtractor={index => `${index}`}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={<JumpBackItem first={true} />}
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    marginBottom: 30,
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
