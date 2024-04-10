import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // For tab icons
import Colors from '../screens/style/Colors';

// Import your screen components
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import InsightsScreen from '../screens/InsightsScreen';
import StartWorkoutScreen from '../screens/StartWorkoutScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'ios-home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'ios-settings-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'ios-person-outline';
          } else if (route.name === 'Insights') {
            iconName = focused ? 'bar-chart' : 'ios-bar-chart-outline';
          } else if (route.name === 'StartWorkout') {
            iconName = focused ? 'bar-chart' : 'ios-bar-chart-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: Colors.BASE_LIGHT,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Insights" component={InsightsScreen} />
      <Tab.Screen name="StartWorkout" component={StartWorkoutScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
