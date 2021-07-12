import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';

const initialMessages = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/nick.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/nick.jpg"),
    },
  ];

function MessagesScreen(props) {
    return (
      <Screen>
        <FlatList
            data={initialMessages} 
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => (
                <ListItem 
                    title={item.title}
                    subTitle={item.description}
                    image={item.image} 
                />
            )}
            ItemSeparatorComponent={ListItemSeparator}
        />
      </Screen>
        
    );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight
  }
})

export default MessagesScreen;