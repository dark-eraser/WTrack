import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Alert,
  Pressable,
  StatusBar,
  FlatList,
  Item,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {styles} from '/Users/darkeraser/Documents/dev/WTrack/screens/style/styles.js';
import Colors from '/Users/darkeraser/Documents/dev/WTrack/screens/style/Colors.js';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import FilterableList from './components/FilterableList'; // Update the import path
const workoutData = require('../workouts/ppl.json').workouts; // Load your exercises data
import {
  Button,
  ButtonGroup,
  Layout,
  Card,
  Text,
  // Modal,
  Header,
  Avatar,
  // Icon,
} from '@ui-kitten/components';
import {Chip, Button as ElementButton} from '@rneui/themed';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = {fontFamily: 'Inter'};

const WorkoutItem = ({item}) => (
  <View style={styles.itemContainer}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Chip
        color={Colors.ACCENT_ORANGE}
        size="sm"
        radius="md"
        title={item.difficulty}
      />
    </View>
    <Text style={styles.subtitle}>{item.length}</Text>
  </View>
);
const workouts = workoutData;
const WorkoutList = () => (
  <SafeAreaView style={styles.listContainer}>
    <FilterableList
      items={workouts}
      renderItem={({item}) => <WorkoutItem item={item} />}
      filterOptions={['Intermediate', 'Advanced', 'Beginner']}
      filterField="difficulty"
      searchPlaceholder="Search exercises..."
    />
  </SafeAreaView>
);
const HomeScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [isFabClicked, setIsFabClicked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [todaysWorkoutModalVisible, setTodaysWorkoutModalVisible] =
    useState(false);
  const handleFabPress = () => {
    setIsFabClicked(current => !current);
  };
  const navigation = useNavigation();
  const StartWorkoutOfTheDay = () => {
    setTodaysWorkoutModalVisible(false);
    navigation.navigate('Start Workout');
  };

  return (
    <Layout style={styles.container} level="1">
      <SafeAreaView style={styles.container}>
        <Avatar
          style={styles.avatar}
          size="giant"
          source={require('../assets/workout.jpg')} // Replace 'avatar.jpg' with your actual avatar image filename
        />
        <Layout
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
              <TouchableHighlight
                onPress={() => setTodaysWorkoutModalVisible(true)}
                activeOpacity={0.99}
                underlayColor={Colors.CARD_LIGHT_BG}>
                <View style={styles.card}>
                  <Layout level="2" style={styles.cardcontent}>
                    <Text style={styles.cardSubtitle}>
                      Medium Full Body Workout
                    </Text>
                  </Layout>
                  <View style={styles.bottomRow}>
                    <Text style={styles.bottomText}>🔥 450 kcal</Text>
                    <Text style={styles.bottomText}>⏱ 45 min</Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.categoriesContainer}>
            <Text style={styles.categoriesTitle}>Workout Categories</Text>
          </View>
          <View style={styles.categoriesContainer}>
            <Text style={styles.categoriesTitle}>Recent Insights</Text>
            <Text style={styles.categoryText}>
              Placeholder for some nice insightful graph
            </Text>
          </View>
          <Text style={styles.subCategoryTitle}>Workout Categories</Text>

          <WorkoutList />
        </Layout>

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
        <Modal
          animationIn={'slideInUp'}
          animationOut={'slideOutLeft'}
          onBackdropPress={() =>
            setTodaysWorkoutModalVisible(!todaysWorkoutModalVisible)
          }
          // transparent={true}
          hasBackdrop={true}
          backdropOpacity={0.2}
          onRequestClose={() => setModalVisible(false)}
          // style={styles.todaysWorkoutModalView}
          // backdropColor={Colors.CARD_LIGHT_BG}
          isVisible={todaysWorkoutModalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.todaysWorkoutModalView}>
              <Image
                style={styles.exampleBigWorkoutImage}
                source={require('../assets/workout_example.png')}
              />
              <Text style={styles.modalText}>Medium Full Body Workout</Text>
              <View style={styles.subtitleContainer}>
                <Chip
                  title="Intermediate"
                  type="outline"
                  uppercase
                  // size:sm
                  buttonStyle={styles.cardChip}
                  titleStyle={styles.cardChipTitle}
                />
                <Chip
                  title="Full Body"
                  type="outline"
                  uppercase
                  // size:sm
                  buttonStyle={styles.cardChip}
                  titleStyle={styles.cardChipTitle}
                />
              </View>
              <Text style={styles.modalText}>
                Placeholder for Exercise List
              </Text>

              <ElementButton
                title="START"
                loading={false}
                loadingProps={{size: 'small', color: 'white'}}
                buttonStyle={styles.bigButton}
                titleStyle={styles.bigButtonTitle}
                containerStyle={styles.bigButtonContainer}
                onPress={() => StartWorkoutOfTheDay()}
              />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </Layout>
  );
};

export default HomeScreen;
