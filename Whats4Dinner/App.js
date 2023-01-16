import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import Dialog from "react-native-dialog"
import MealPlan from './screens/MealPlan';


// // Creating a screen stack
// const Stack = createNativeStackNavigator();

// const screenNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//         name="Main"
//         component={HomeScreen}
//         optioins={{title: 'Welcome'}}/>
  
//       <Stack.Screen name="Input" component={{ProfileScreen}} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };


// const HomeScreen = ({navigation}) => {
//   return (

//   );
// };

const inputWindow = () => {
  return (
    <Dialog.Container>
    <Dialog.Title> Account </Dialog.Title>
    <Dialog.Description>
      What do you want to eat?
    </Dialog.Description>
    <Dialog.Button label="Cancel" />
    <Dialog.Button label="Delete" />
    </Dialog.Container>
  );
};

let changeScreen=0
console.log("var=", changeScreen)

export default function App() {
 
  if (changeScreen > 2)  {
    console.log("Why the f!")
    return <MealPlan/>
  };

  return (
    
   

    <View style={styles.container}>
     
        {/* <View style={{
          backgroundColor: "dodgerblue",
          flex: 1
        }}/> */}
     
      {/* make a view to hold the app title containing the  */}

      <View style={[styles.container, {backgroundColor: '#EE6C4D', flex: 0.08, justifyContent: 'center',}]}>
      <Text style={[textStyles.headline, {marginTop: 15}]}>What's 4 Dinner?</Text>
      </View>

      {/* This container holds the days of the week */}
      <View style={[styles.container, {backgroundColor: '#2E4052', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', 
      flexWrap: 'wrap', alignContent: 'center', }]}>
        
        <TouchableHighlight onPress={() => [ console.log("Something"),Alert.alert("Monday's Meal", "What meal do you want to have on Monday?", [
          {text: "Save"},
          {text: "Exit"}
        ])]}> 
        <View
        style={ days.container }>
        <Text style={textStyles.dayName}>Monday</Text>
        </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => [console.log("Tuesday"), changeScreen = changeScreen+1, console.log(changeScreen)]}>
        <View style={days.container }>
          <Text style={textStyles.dayName}>Tuesday</Text>
        </View>
        </TouchableHighlight>

       

        <TouchableHighlight onPress={inputWindow}>
        <View style={days.container }>
          <Text style={textStyles.dayName}>Wednesday</Text>
        </View>
       </TouchableHighlight>

        <View style={days.container }>
          <Text style={textStyles.dayName}>Thursday</Text>
        </View>

        <View style={days.container }>
          <Text style={textStyles.dayName}>Friday</Text>
        </View>

        <View style={days.container }>
          <Text style={textStyles.dayName}>Saturday</Text>
        </View>

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
    </View>

    
    
  );

  
}



const testingSheet = StyleSheet.create({
  color1: {
    backgroundColor: 'red'
  }
})



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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})

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

// the styles variable is kind of acting like a class. And the itmes under it like container are like the methods that can be called on the class.