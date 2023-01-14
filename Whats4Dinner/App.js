import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';

export default function App() {
  return (
    
    <NavigationContainer>
    
     {/* The main view container */}

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

        <View style={days.container }>
          <Text style={textStyles.dayName}>Tuesday</Text>
        </View>

        <View style={days.container }>
          <Text style={textStyles.dayName}>Wednesday</Text>
        </View>

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
        
      </View>
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>
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