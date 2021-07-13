import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
      id: 1,
      title: "Jacket",
      description: "Hi, is this still available?",
      image: require("../assets/nick.jpg"),
    },
    {
      id: 2,
      title: "Camera",
      description: "Hey, is this a mirrorless camera?",
      image: require("../assets/nick.jpg"),
    },
  ];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // delete message from messages
    // call server to delete from backend
    setMessages(messages.filter(m => m.id !== message.id));
  }

  return (
    <Screen>
      <FlatList
          data={messages} 
          keyExtractor={message => message.id.toString()}
          renderItem={({ item }) => (
              <ListItem 
                  title={item.title}
                  subTitle={item.description}
                  image={item.image} 
                  onPress={() => console.log("message selected", item)}
                  renderRightActions={() => 
                    <ListItemDeleteAction onPress={() => handleDelete(item)} />}
              />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages([
              {
                id: 2,
                title: "T2",
                description: "D2",
                image: require("../assets/nick.jpg"),
              },
            ])
          }}
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