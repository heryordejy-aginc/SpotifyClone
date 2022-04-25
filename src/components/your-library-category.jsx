import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { screenHeight } from '../utils/dimens';

const category = [
  { name: 'Playlist', value: 'Playlist' },
  { name: 'Artist', value: 'Artist' },
  { name: 'Albums', value: 'Albums' },
  { name: 'Podcast & Show', value: 'Podcast & Show' },
];

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.renderItem}>
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default function YourLibraryCategory(props) {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
      horizontal={true}
      data={[...category]}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  content: {
    paddingLeft: 10,
  },
  renderItem: {
    marginRight: 10,
    height: screenHeight * 0.05,
    borderRadius: screenHeight * 0.05,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  itemName: {
    fontSize: 16,
  },
});
