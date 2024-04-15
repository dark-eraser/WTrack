import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ExerciseList from './components/CardList'; 
import {styles} from '/Users/darkeraser/Documents/dev/WTrack/screens/style/styles.js';
const App = () => {
  const exercisesData = require('../exercises/exercises.json').exercises; // Load your exercises data

  return (
    <SafeAreaView style={styles.listContainer}>
      <View style={styles.headerContainer}>
      <Text style={styles.greeting}>Exercises</Text>

      </View>
      <ExerciseList exercises={exercisesData} />
    </SafeAreaView>
  );
};


export default App;
