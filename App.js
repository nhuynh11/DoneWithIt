import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TouchableNativeFeedback, Button, Alert } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const {landscape} = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'pink',
        width: "100%",
        height: landscape ? '100%' : '30%',
      }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
