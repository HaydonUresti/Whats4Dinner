import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Modal} from 'react-native';
import Dialog from "react-native-dialog"
import MealNoteModal from '../components/MealNoteModal';
// import MealPlan from './screens/MealPlan';



// const inputWindow = () => {

   
//     return (
//       <Dialog.Container>
//       <Dialog.Title> Account </Dialog.Title>
//       <Dialog.Description>
//         What do you want to eat?
//       </Dialog.Description>
//       <Dialog.Button label="Cancel" />
//       <Dialog.Button label="Delete" />
//       </Dialog.Container>
//     );
//   };




// The funciton that contains the main screen of the app with its fucntions.
//Parameters: None
//Returns: The tags and components of the main screen.
function MainScreen() {
 
 // A piece of state to set the visibility of the modal (The modal is the note pop-up)
 const [modalVisible, setModalVisible] = useState(false);

 
  return (
    
   

    <View style={styles.container}>
     
        {/* <View style={{
          backgroundColor: "dodgerblue",
          flex: 1
        }}/> */}
     

      <View style={[styles.container, {backgroundColor: '#EE6C4D', flex: 0.08, justifyContent: 'center',}]}>
      <Text style={[textStyles.headline, {marginTop: 15}]}>What's 4 Dinner?</Text>
      </View>

      {/* This container holds the days of the week */}
      <View style={[styles.container, {backgroundColor: '#2E4052', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', 
      flexWrap: 'wrap', alignContent: 'center', }]}>
        


        {/* MONDAY */}
        <TouchableHighlight onPress={() => setModalVisible(true)}> 
        <View
        style={ days.container }>
        <Text style={textStyles.dayName}>Monday</Text>
        </View>
        </TouchableHighlight>


        {/* TUESDAY */}
        <TouchableHighlight onPress={() => [console.log("Tuesday"), <MealNoteModal visible={true}/>]}>
        <View style={days.container }>
          <Text style={textStyles.dayName}>Tuesday</Text>
        </View>
        </TouchableHighlight>

       
        {/* WEDNESDAY */}
        <TouchableHighlight onPress={() => setModalVisible(true)}>
        <View style={days.container }>
          <Text style={textStyles.dayName}>Wednesday</Text>
        </View>
       </TouchableHighlight>

        {/* THURSDAY */}
        <View style={days.container }>
          <Text style={textStyles.dayName}>Thursday</Text>
        </View>

        {/* FRIDAY */}
        <View style={days.container }>
          <Text style={textStyles.dayName}>Friday</Text>
        </View>


        {/* SATURDAY */}
        <View style={days.container }>
          <Text style={textStyles.dayName}>Saturday</Text>
        </View>


        {/* SUNDAY */}
        <View style={days.sundayContainer }>
          <Text style={textStyles.dayName}>Sunday</Text>
        </View>
        

         <Dialog.Container>
    <Dialog.Title> Account </Dialog.Title>
    <Dialog.Description>
      What do you want to eat?
    </Dialog.Description>
    <Dialog.Button label="Cancel" />
    <Dialog.Button label="Delete" />
    </Dialog.Container>


      </View>
      <StatusBar style="auto" />
      <MealNoteModal visible={modalVisible} onClose={() => setModalVisible(false)}/>
    </View>

    
    
  );

  
}


// A style sheet defining the styles used by the day containers. 
const days = StyleSheet.create({
  container:  {
    width: 80,
    height: 50,
    backgroundColor: '#FFC857',
    margin: 10
  },
  sundayContainer: {
    width: 110,
    height: 50,
    backgroundColor: '#FFC857',
    margin: 10
  }
})


// A style sheet defining the styles used generally by containers.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})

// A style sheet defining the styles affecting text.
const textStyles = StyleSheet.create({
  centerText: {
    textAlign: 'center',
  },
  dayName: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
  
})

// The export statement allowing the MainScreen function to be called elsewhere. 
export default MainScreen;

// the styles variable is kind of acting like a class. And the itmes under it like container are like the methods that can be called on the class.