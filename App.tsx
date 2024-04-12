// Import necessary components from react-navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

// Import your screen components
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from './screens/SettingsScreen';
import StartWorkoutScreen from './screens/StartWorkoutScreen';
import ExercisesScreen from './screens/test';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


// Create stack and tab navigators
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Start Workout" component={StartWorkoutScreen} />
    </HomeStack.Navigator>
  );
}

// Bottom tab navigator setup
function MyTabs() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>

    <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Exercises" component={ExercisesScreen} />
      
    </Tab.Navigator>
    </ApplicationProvider>

  );
}

// Main App component
function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
