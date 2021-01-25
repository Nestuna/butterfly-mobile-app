import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { theme } from './Style/Theme'
import InitNavigation from './Navigation/InitNavigation';
import { ThemeConsumer } from 'react-native-elements';
import Home from './Components/Home.js'


export default function App() {
  return (
    
    <NavigationContainer>
      <InitNavigation/>
    </NavigationContainer>

  );
}
