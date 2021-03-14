import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SignupLoginScreen from '.screens/SignupLoginScreen';
import HomeScreen from '.screens/HomeScreen';
import ExchangeScreen from '.screens/ExchangeScreen';
import {CreateDrawerNavigator} from 'react-navigation-drawer';
import customSideBarMenu from '../components/customSideBarMenu'
import Settings from '../screens/settings';



export default function App() {
  return (
    <View style={styles.container}>
     <SignupLoginScreen/>
    </View>
  );
}

export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home'
    }
  },
  Exchange: {
    screen: ExchangeScreen,
    navigationOptions: {
      tabBarLabel: 'Exchange'
    }
  }
})

const AppDrawNavigator = createDrawerNavigator({
  Home: {
    screen: TabNavigator
  },
  Settings: {
    screen: Settings
  },
},
  {
    contentComponent:customSideBarMenu
  },
  {
    initialRouteName: 'Home'
  
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
