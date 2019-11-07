import { View } from 'react-native';
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import Icon from 'react-native-vector-icons/Ionicons';


const tabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomePage,
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