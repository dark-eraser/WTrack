// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList } from 'react-native';
// import firestore from '@react-native-firebase/firestore';

// const App = () => {
//     const [exercises, setExercises] = useState([]); // State to store the fetched exercises
  
//     // Function to fetch exercises from Firestore
//     const fetchExercises = async () => {
//       try {
//         const exerciseCollection = await firestore().collection('Exercises').get();
//         const exercisesArray = exerciseCollection.docs.map(doc => ({
//           id: doc.id, // Document ID
//           ...doc.data() // Document data
//         }));
//         setExercises(exercisesArray);
//       } catch (error) {
//         console.error("Failed to fetch exercises:", error);
//       }
//       db.collection("users").add({
//         first: "Ada",
//         last: "Lovelace",
//         born: 1815
//     })
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });
//     };
  
//     // Use useEffect to call fetchExercises when the component mounts
//     useEffect(() => {
//       fetchExercises();
//     }, []);
  
//     // Render exercises
//     return (
//       <View>
//         <FlatList
//           data={exercises}
//           keyExtractor={item => item.id}
//           renderItem={({ item }) => (
//             <View style={{ margin: 10 }}>
//               <Text style={{ fontWeight: 'bold' }}>{item.Name}</Text>
//               {/* <Text>{item.description}</Text>
//               <Text>Muscle Group: {item.muscleGroup}</Text> */}
//             </View>
//           )}
//         />
//       </View>
//     );
//   };

// export default App;
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;