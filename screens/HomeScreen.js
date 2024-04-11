import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Alert,
  Modal,
  Pressable,
  StatusBar,
  FlatList,
  Item,
  ImageBackground,
} from 'react-native';

import Colors from './style/Colors';
import {useNavigation} from '@react-navigation/native';
import {
  Button,
  ButtonGroup,
  Layout,
  Card,
  Text,
  Header,
  Avatar,
} from '@ui-kitten/components';
Text.defaultProps = Text.defaultProps || {};

Text.defaultProps.style = {fontFamily: 'Inter'};

// const HomeStack = createStackNavigator();
// const SettingsStack = createStackNavigator();
// Repeat for other tabs as necessary

const HomeScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [selectedIndexes, setSelectedIndexes] = React.useState([]);
  const [isFabClicked, setIsFabClicked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const handleFabPress = () => {
    setIsFabClicked(current => !current);
  };
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <Layout style={styles.container} level="1">
      <SafeAreaView style={styles.container}>
        <Avatar
          style={styles.avatar}
          size="giant"
          source={require('../assets/workout.jpg')} // Replace 'avatar.jpg' with your actual avatar image filename
        />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}>
          {/* Header with Welcome Message and Profile Image */}
          <View style={styles.welcomecontainer}>
            <View style={styles.headerContainer}>
              <View>
                <Text style={styles.greeting}>Hello David</Text>
                <Text style={styles.title}>Let’s get started </Text>
              </View>
            </View>
            <View style={styles.welcomecontainer}>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Layout level="2" style={styles.cardcontent}>
                    <Text style={styles.cardTitle}>
                      Medium Full Body Workout
                    </Text>

                    <Image
                      style={styles.workoutImage}
                      source={require('../assets/workout_example.png')}/>
                  </Layout>
                  <View style={styles.bottomRow}>
                    <Text style={styles.bottomText}>🔥 450 kcal</Text>
                    <Text style={styles.bottomText}>⏱ 45 min</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* Workout Categories */}
          <View style={styles.categoriesContainer}>
            <Text style={styles.categoriesTitle}>Workout Categories</Text>
          </View>
          <SafeAreaView style={styles.container} alignItems="center">
            {/* Your screen content */}
            <ButtonGroup
              style={styles.buttonGroup}
              status="warning"
              size="medium">
              <Button>Beginner</Button>
              <Button>Intermediate</Button>
              <Button>Advanced</Button>
            </ButtonGroup>
          </SafeAreaView>
          <View style={styles.card1} header={Header} status="warning">
            <Image
              style={styles.workoutImage}
              source={require('../assets/workout.jpg')}
            />
            <Text>Today's Workout</Text>
            <Text style={styles.workoutSubtitle}>Medium Full Body Workout</Text>
            <View style={styles.workoutInfo}>
              <Text style={styles.workoutDuration}>⏱ 45 min</Text>
              <Text style={styles.workoutCalories}>🔥 350 Cal</Text>
            </View>
          </View>

          {/* Bottom Tab Navigation Placeholder */}
          {/* <View style={styles.bottomTabNav}></View> */}
        </ScrollView>
        {/* Floating Action Button */}
        <TouchableHighlight
          // Darker color for the underlay
          onPress={() => setModalVisible(true)}
          style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableHighlight>
        <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Next Workout: Push</Text>
                <Pressable
                  style={[styles.button]}
                  onPress={() => navigation.navigate('StartWorkoutScreen')}>
                  <Text style={styles.textStyle}>START</Text>
                </Pressable>
                <Pressable
                  style={[styles.buttonClose]} // Updated style for the close button
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>X</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-between',
    // backgroundColor: Colors.CARD_LIGHT_BG,
  },
  cardcontent: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.CARD_LIGHT_BG,
  },
  card1: {
    width: 300,
    height: 150,
    borderRadius: 12, // Rounds the corners for a modern look
    shadowColor: 'rgba(0, 0, 0, 0.1)', // Soft shadow color
    shadowOffset: {width: 0, height: 4}, // Shadow positioning
    shadowOpacity: 1, // Shadow opacity (for iOS)
    shadowRadius: 6, // Shadow spread (for iOS)
    elevation: 3, // Shadow elevation (for Android)
    borderColor: '#f0f0f0', // Light border color for definition
    backgroundColor: Colors.BASE_LIGHT,
  },
  card: {
    backgroundColor: Colors.CARD_LIGHT_BG, // Adjust the color to match your card's background
    borderRadius: 10, // Rounded corners
    padding: 16, // Padding inside the card
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 2}, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow radius
    elevation: 5, // Elevation for Android
  },

  bottomRow: {
    flexDirection: 'row', // Align bottom items in a row
    justifyContent: 'flex-end', // Even space around the items
    alignItems: 'center', // Center items vertically
  },
  bottomText: {
    fontSize: 11, // Set the font size for the bottom text
    // Add additional styling for the text if needed
    paddingHorizontal: 3, // Add padding to the text
  },

  buttonGroup: {
    margin: 2,
  },
  cardTitle: {
    fontSize: 16,
    color: Colors.ACCENT_ORANGE,
    // padding: 10,
    // margin: 10,
    marginTop: 26,
    width: 120,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    justifyContent: 'center',
    backgroundColor: '#3366FF',
  },
  avatar: {
    position: 'absolute', // Position the avatar absolutely to place it over other components
    top: StatusBar.currentHeight || 0, // Start from the top of the screen, add status bar height if present
    right: 10, // 10 pixels from the right edge of the screen
    margin: 10, // Add margin to the avatar
    marginTop: 60, // Add padding to the top of the avatar
    // other styles for your avatar, such as size, border, etc.
  },
  safeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0, // Add padding to prevent content from being under the status bar
    // ... other styles if needed ...
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 50, // Height of the bottom tab nav
  },
  welcomecontainer: {
    backgroundColor: Colors.LIGHT_ORANGE,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.BLACK_TEXT,
  },
  title: {
    fontSize: 26,
    fontWeight: '300',
    marginBottom: 10,
    color: Colors.ACCENT_ORANGE,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  workoutContainer: {
    // paddingHorizontal: 20,
    // marginBottom: 20,
    borderRadius: 8, // Softens the corners
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {width: 1, height: 2}, // Position of the shadow
    shadowOpacity: 0.23, // Shadow opacity
    shadowRadius: 1.62, // Blur radius of the shadow
    elevation: 4, // Elevation for Android to show shadow
  },

  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: Colors.BLACK_TEXT,
  },
  workoutImage: {
    height: 70,
    width: '60%',
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  workoutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  workoutSubtitle: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 10,
  },
  workoutInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Aligns the Text components to the right
    marginTop: 15, // Adds space above the workoutInfo, adjust as needed
  },
  workoutDuration: {
    fontSize: 15,
    marginRight: 10,
  },
  workoutCalories: {
    fontSize: 15,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoriesTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  category: {
    backgroundColor: 'lightgrey',
    padding: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  categoryText: {
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    width: 60, // Diameter of the FAB
    height: 60, // Diameter of the FAB
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: Colors.ACCENT_ORANGE, // Your FAB color
    borderRadius: 30, // Half of the width/height to make it a perfect circle
    elevation: 8, // Shadow for Android
    shadowColor: '#000000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  fabClicked: {
    backgroundColor: Colors.ACCENT_ORANGE, // Different color to indicate a click
    // Any other style changes you want to apply when the FAB is clicked
  },
  fabIcon: {
    fontSize: 30,
    color: '#FFFFFF',
  },

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
    position: 'absolute', // Position absolutely within its parent
    right: 10, // 10 pixels from the right edge of the modal
    top: 10, // 10 pixels from the top edge of the modal
    // backgroundColor: 'transparent', // Optional: make background transparent
    padding: 10, // Padding to increase touch area
  },
  textStyle: {
    color: Colors.BLACK_TEXT, // Adjust color to suit your design
    fontWeight: 'bold', // Bold text for the "X"
    textAlign: 'center',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default HomeScreen;
