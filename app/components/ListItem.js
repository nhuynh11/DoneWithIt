import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({ 
  title, 
  subTitle, 
  image, 
  IconComponent, 
  onPress, 
  renderRightActions }) 
{
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight 
        onPress={onPress}
        underlayColor={colors.light}
      >
        <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
        <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25} />
      </View>
      </TouchableHighlight>
    </Swipeable>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
