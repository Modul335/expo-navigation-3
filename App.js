import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

// You can import from local files
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import SignoutScreen from './components/SignoutScreen';

const TabNavigator = createBottomTabNavigator({
    Home: {
       screen: HomeScreen, 
        navigationOptions: {
            tabBarLabel: 'Home', 
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-home" color={tintColor} size={25} />
            )
        }    
    }, 
    Settings: {
        screen: SettingsScreen, 
        navigationOptions: {
            tabBarLabel: 'Settings', 
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-settings" color={tintColor} size={25} />
            )
        }
    }, 
    Signout: {
        screen: SignoutScreen, 
        navigationOptions: {
            tabBarLabel: 'Signout', 
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-walk" color={tintColor} size={25} />
            )
        }
    }    
}, {
    tabBarOptions: {
        activeTintColor: 'red', 
        inactiveTintColor: 'grey'
    }
});



export default createAppContainer(TabNavigator);


