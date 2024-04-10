import React from 'react';
import React from 'react';
import AppNavigator from './AppNavigator';

export default function App() {
  return <AppNavigator />;
}

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SignUpScreen from './SignUpScreen'; // Make sure to create this screen

const Stack = createNativeStackNavigator();


