import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';

const HomeScreen = () => {
  const [isClicked, setIsClicked] = useState(false);

  const startNewWorkout = () => {
    setIsClicked(!isClicked); // Toggle the state
    // Trigger any action you want to perform on click
    Alert.alert('Action', 'Starting a new workout...');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Rest of your home screen components */}
      
      {/* Custom Floating Action Button */}
      <TouchableOpacity
        onPress={startNewWorkout}
        style={[styles.fab, isClicked ? styles.fabClicked : null]}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Your container styles
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  fabClicked: {
    backgroundColor: '#0294A5', // Different color to indicate a click
    // Any other style changes you want to apply when the FAB is clicked
  },
  fabIcon: {
    fontSize: 30,
    color: '#FFFFFF',
  },
});

export default HomeScreen;
