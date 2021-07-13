import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LastSeenComponent from "./LastSeenComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello there!</Text>
      <StatusBar style="auto" />
      <LastSeenComponent lastSeenTimestamp={Math.floor(Date.now()/1000)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
