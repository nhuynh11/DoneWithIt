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
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec dignissim urna, quis fermentum felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et nunc dictum, pellentesque libero sit amet, fringilla orci. Duis convallis velit vitae nisl vestibulum efficitur. Sed et risus velit. Nullam sit amet nunc lectus. Sed quis lectus nec lacus porta tristique eget quis arcu. Nam porttitor ut libero eget vestibulum. Etiam a orci dictum, consectetur neque non, semper lorem. Donec quis tincidunt mauris. Nunc sit amet scelerisque felis. In nec erat vitae sem lacinia finibus.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec dignissim urna, quis fermentum felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et nunc dictum, pellentesque libero sit amet, fringilla orci. Duis convallis velit vitae nisl vestibulum efficitur. Sed et risus velit. Nullam sit amet nunc lectus. Sed quis lectus nec lacus porta tristique eget quis arcu. Nam porttitor ut libero eget vestibulum. Etiam a orci dictum, consectetur neque non, semper lorem. Donec quis tincidunt mauris. Nunc sit amet scelerisque felis. In nec erat vitae sem lacinia finibus.",
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