import React, { useEffect, useState } from "react";
import { Button, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "./app/components/Screen";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button 
      title="Click"
      onPress={() => navigation.navigate('TweetDetails', {id: 1})}
    />
  )
}

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button title="View Tweet"
    onPress={() => navigation.navigate("TweetDetails", {id: 1})} />
    <Link />
  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
)

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerStyle: { backgroundColor: "green"},
    headerTintColor: "white",
  }} >
    <Stack.Screen 
      name="Tweets" 
      component={Tweets} 
      options={{
        headerStyle: { backgroundColor: "pink"},
        headerTintColor: "white",
        headerShown: true,
      }} />
    <Stack.Screen 
      name="TweetDetails" 
      component={TweetDetails} 
      options={({route}) => ({ title: route.params.id })} />
  </Stack.Navigator>
)

const Account = () => <Screen><Text>Acount</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name = "Feed" component={Tweets} />
    <Tab.Screen name = "Account" component={Account} />
  </Tab.Navigator>
)

export default function App() {

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
