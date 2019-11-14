import { View } from 'react-native';
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from "../pages/HomePage";
import EventForm from '../pages/eventForm'
import SettingsPage from "../pages/SettingsPage";
import Icon from 'react-native-vector-icons/Ionicons';

const HomeNav = createStackNavigator({
    Home: {
        screen: HomePage
    },
    Add: {
        screen: EventForm
    }
});

const tabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeNav,
            navigationOptions: {
                tabBarLabel: 'Accueil',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-home'} />
                )
            }
        },
        Settings: {
            screen: SettingsPage,
            navigationOptions: {
                tabBarLabel: 'Paramètres',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-settings'} />
                ),
                barStyle: { backgroundColor: 'red' }
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
)


export default tabNavigator;