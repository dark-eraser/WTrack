import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import FilterableList from './components/FilterableList'; // Update the import path
import Colors from '/Users/darkeraser/Documents/dev/WTrack/screens/style/Colors.js';
import {styles} from '/Users/darkeraser/Documents/dev/WTrack/screens/style/styles.js';
import {Chip, Button as ElementButton} from '@rneui/themed';
const ExerciseItem = ({item}) => (
  <View style={styles.itemContainer}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Chip
        color={Colors.ACCENT_ORANGE}
        size="sm"
        radius="md"
        title={item.equipment}
      />
    </View>
    <Text style={styles.subtitle}>{item.muscle_group}</Text>
    <Text style={styles.itemDetails}>
      {item.sets} x {item.reps} x {item.weight}kg
    </Text>
  </View>
);
const exercisesData = require('../exercises/exercises.json').exercises; // Load your exercises data

const exercises = exercisesData;

const ExerciseList = () => (
  <SafeAreaView style={styles.listContainer}>
    <View style={styles.headerContainer}>
      <Text style={styles.greeting}>Exercises</Text>
    </View>
    <FilterableList
      items={exercises}
      renderItem={({item}) => <ExerciseItem item={item} />}
      filterOptions={['Back', 'Biceps', 'Chest', 'Legs', 'Shoulders']}
      searchPlaceholder="Search exercises..."
    />
  </SafeAreaView>
);

export default ExerciseList;
