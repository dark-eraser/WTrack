import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    // Example action
    Alert.alert('Button Pressed', 'You pressed the button!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      <Image
        source={{ uri: 'https://placeimg.com/640/480/any' }}
        style={styles.image}
      />
      <Button title="Click Me" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
});

export default HomeScreen;
