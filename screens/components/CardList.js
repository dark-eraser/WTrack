import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import {Chip, Button as ElementButton} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '/Users/darkeraser/Documents/dev/WTrack/screens/style/Colors.js';

const ExerciseItem = ({exercise}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.itemName}>{exercise.name}</Text>
        <Chip color={Colors.ACCENT_ORANGE} size="sm" radius="md" title={exercise.equipment}>
          
        </Chip>
      </View>
      <Text style={styles.subtitle}>{exercise.muscle_group}</Text>
      <Text style={styles.itemDetails}>
        {exercise.sets} x {exercise.reps} x {exercise.weight}kg
      </Text>
    </View>
  );
};

const ExerciseList = ({exercises}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  const handleSearch = text => {
    setSearchQuery(text);
    const filteredData = exercises.filter(exercise => {
      return (
        exercise.name.toLowerCase().includes(text.toLowerCase()) ||
        exercise.muscle_group.toLowerCase().includes(text.toLowerCase())
      );
    });
    setFilteredExercises(filteredData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search exercises..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredExercises}
        renderItem={({item}) => <ExerciseItem exercise={item} />}
        keyExtractor={item => item.id.toString()}
        extraData={filteredExercises}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  searchBar: {
    fontSize: 16,
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },

});

export default ExerciseList;
