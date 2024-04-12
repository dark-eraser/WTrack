import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '/Users/darkeraser/Documents/dev/WTrack/screens/style/styles.js';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('my-keyy', jsonValue);
  } catch (e) {
    console.log(e);
    // saving error
  }
};
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('my-keyy');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
    // error reading value
  }
};
const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Storage successfully cleared!');
  } catch (e) {
    console.log('Failed to clear the async storage.');
  }
};

const StartWorkoutScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const HandlePress1 = () => {
    storeData("coucou");
    setModalVisible(!modalVisible);
  };
  const HandlePress2 = async () => {
    const tmp = getData();
    console.log(await tmp);
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => HandlePress2()}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => HandlePress1()}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => clearStorage()}>
        <Text style={styles.textStyle}>Clear</Text>
      </Pressable>
    </View>
  );
};

export default StartWorkoutScreen;
