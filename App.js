import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TouchableNativeFeedback } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello React Native</Text>
      <TouchableNativeFeedback onPress={() => console.log("image touched")}>
        <View style={{
          width: 200,
          height: 200,
          backgroundColor: 'green',
        }}></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight || 0,
    justifyContent: "center",
    alignItems: "center"
  },
});
