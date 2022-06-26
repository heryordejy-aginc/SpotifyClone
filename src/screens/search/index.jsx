import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { appColors } from '../../styles/colors';
import { fontFamily } from '../../styles/font';

export default function SearchIndex() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Search{'\n'}Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.Black,
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontFamily: fontFamily.Bold, fontSize: 50, textAlign: 'center' },
});
