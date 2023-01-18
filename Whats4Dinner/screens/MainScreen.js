import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Modal} from 'react-native';
import Dialog from "react-native-dialog"
import MealNoteModal from '../components/MealNoteModal';
// import MealPlan from './screens/MealPlan';






// The funciton that contains the main screen of the app with its fucntions.
//Parameters: None
//Returns: The tags and components of the main screen.
function MainScreen() {
 
 // A piece of state to set the visibility of the modal (The modal is the note pop-up)
 // It is initially set to false so that the modal does not immediately appear on screen.
 const [modalVisible, setModalVisible] = useState(false);
 const [dayUsed, setModalDay] = useState('')
 
 const submitMeal = (whatDay, MealTitle, MealDescription) => {
   console.log(whatDay, MealTitle, MealDescription);
 }


  return (
    
   

    <View style={styles.container}>
     

     

      <View style={[styles.container, {backgroundColor: '#EE6C4D', flex: 0.08, justifyContent: 'center',}]}>
      <Text style={[textStyles.headline, {marginTop: 15}]}>What's 4 Dinner?</Text>
      </View>

      {/* This container holds the days of the week */}
      <View style={[styles.container, {backgroundColor: '#2E4052', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', 
      flexWrap: 'wrap', alignContent: 'center', }]}>
        


        {/* MONDAY */}
        {/* Giving SetModalVisible the value true will make the modal pop up as its visibility is set to true */}
        {/* <TouchableHighlight onPress={() => setModalVisible(true)}>  */}
        <TouchableHighlight onPress={() => [setModalDay('Monday') ,setModalVisible(true)]}> 
        <View
        style={ days.container }>
        <Text style={textStyles.dayName}>Monday</Text>
        </View>
        </TouchableHighlight>


        {/* TUESDAY */}
        <TouchableHighlight onPress={() => [setModalDay('Tuesday') ,setModalVisible(true)]}> 
        <View style={days.container }>
          <Text style={textStyles.dayName}>Tuesday</Text>
        </View>
        </TouchableHighlight>

       
        {/* WEDNESDAY */}
        <TouchableHighlight onPress={() => [setModalDay('Wednesday') ,setModalVisible(true)]}> 
        <View style={days.container }>
          <Text style={textStyles.dayName}>Wednesday</Text>
        </View>
       </TouchableHighlight>

        {/* THURSDAY */}
        <TouchableHighlight onPress={() => [setModalDay('Thursday') ,setModalVisible(true)]}> 
        <View style={days.container }>
          <Text style={textStyles.dayName}>Thursday</Text>
        </View>
        </TouchableHighlight>

        {/* FRIDAY */}
        <TouchableHighlight onPress={() => [setModalDay('Friday') ,setModalVisible(true)]}> 
        <View style={days.container }>
          <Text style={textStyles.dayName}>Friday</Text>
        </View>
        </TouchableHighlight>


        {/* SATURDAY */}
        <TouchableHighlight onPress={() => [setModalDay('Saturday') ,setModalVisible(true)]}> 
        <View style={days.container }>
          <Text style={textStyles.dayName}>Saturday</Text>
        </View>
        </TouchableHighlight>


        {/* SUNDAY */}
        <TouchableHighlight onPress={() => [setModalDay('Sunday') ,setModalVisible(true)]}> 
        <View style={days.sundayContainer }>
          <Text style={textStyles.dayName}>Sunday</Text>
        </View>
        </TouchableHighlight>


      </View>
      <StatusBar style="auto" />

      {/* Calling the modal and setting its visibility to false when the onClose function is called.  */}
      <MealNoteModal visible={modalVisible} whatDay={dayUsed} onClose={() => setModalVisible(false)} onSubmit={submitMeal}/>
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

