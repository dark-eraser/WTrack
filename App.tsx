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


// Create stack and tab navigators
const Tab = createBottomTabNavigator();



// Bottom tab navigator setup
function MyTabs() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>

    <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Exercises" component={ExercisesScreen} />
      
      {/* Add more tabs here as needed, potentially with their own stack navigators */}
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
