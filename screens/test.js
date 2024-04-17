import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FilterableList from './components/FilterableList'; // Update the import path
import Colors from '/Users/darkeraser/Documents/dev/WTrack/screens/style/Colors.js';
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
  <FilterableList
    items={exercises}
    renderItem={({item}) => <ExerciseItem item={item} />}
    filterOptions={['Back', 'Biceps', 'Chest', 'Legs', 'Shoulders']}
    searchPlaceholder="Search exercises..."
  />
);

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 14,
    color: '#666',
    paddingTop: 25,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    paddingTop: 5,
  },
});

export default ExerciseList;
