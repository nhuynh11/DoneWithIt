import React, { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from "./app/components/Screen";
import { result } from "lodash";
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";


export default function App() {

  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('you need to enable permission to access the library')
  }

  useEffect(() => {
    requestPermission();
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled)
        setImageUri(result.uri);
    } catch (error) {
      console.log('error reading an image', error)
    } 
  }

  return <Screen>
    <ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)} />
  </Screen>;
}
