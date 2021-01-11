import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { theme } from '../Style/Theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Conversation from '../Components/Conversation'

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ConversationScreen({navigation}) {
    return (
      <Conversation navigation={navigation} />
    );
  }

const Tab = createBottomTabNavigator();
export default class MainNavigation extends Component {
    render() {
        return (
            <Tab.Navigator 
                initialRouteName = 'Home'
                tabBarOptions = {
                    {
                        keyboardHidesTabBar: true,
                        tabStyle : {
                            backgroundColor: '#737580',
                        },
                        labelStyle: {
                            fontSize: 16,
                            padding: '10%',
                            textTransform: 'capitalize'
                        },
                        activeTintColor: '#FFF',
                        inactiveTintColor: '#AAA',
                    }
                }
                   
            >
                <Tab.Screen name="home" title="Home" component={HomeScreen} />
                <Tab.Screen name="settings" title=" Settings" component={SettingsScreen} />
                <Tab.Screen name="conversation" title="Conversation" component={ConversationScreen} />
          </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    tab_bar: {
        backgroundColor: '#9299A3',
    },
    label: {
        color: 'red'
    }
})