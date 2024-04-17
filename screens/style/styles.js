import {StyleSheet, StatusBar} from 'react-native';
import Colors from '/Users/darkeraser/Documents/dev/WTrack/screens/style/Colors.js';

export const styles = StyleSheet.create({
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
  card: {
    backgroundColor: Colors.CARD_LIGHT_BG, // Adjust the color to match your card's background
    borderRadius: 12, // Rounded corners
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
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: Colors.BLACK_TEXT,
  },
  exampleSmallWorkoutImage: {
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
    marginTop: 0,
    marginBottom: 0,
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
    // marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 500,
  },

  todaysWorkoutModalView: {
    width: '100%',
    height: '60%',
    margin: 20,
    backgroundColor: Colors.CARD_LIGHT_BG,
    borderRadius: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    justifyContent: 'flex',
    // padding: 25,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'top',
  },
  exampleBigWorkoutImage: {
    height: '30%',
    width: '100%',
  },
  cardChip: {
    margin: 10,
    color: Colors.WHITE_TEXT,
    // width: 80,
    // height: 20,
    borderColor: Colors.GRAY,
    borderWidth: 1,
    padding: 4,
    marginTop: 10,
  },
  cardChipTitle: {
    color: Colors.GRAY,

    fontSize: 9,
  },
  subtitleContainer: {
    flexDirection: 'row',
    width: '100%',
    // flexWrap: 'wrap',
    justifyContent: 'center',
  },
  bigButton: {
    backgroundColor: Colors.ACCENT_ORANGE,
    borderRadius: 10,
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    
  },
  bigButtonTitle: {
    fontWeight: 'bold',
    fontSize: 23,
    // color: Colors.BLACK_TEXT,
  },

  bigButtonContainer: {
    marginHorizontal: 50,
    height: 50,
    width: 150,
    marginTop: 130
  

  },

  listContainer: {
    // flex: 1,
    justifyContent: 'flex-start',
    flexGrow: 1,

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
  subCategoryTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.BLACK_TEXT,
    marginBottom: 10,
    marginLeft: 20,
  },
});
