import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import Dialog from "react-native-dialog"


const inputWindow = () => {
    const [modalVisible, setModalVisible] = useState(false);

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

function MealPlan() {
    return (
        <View style={styles.container}>

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
  
});


export default MealPlan;



// const styles = StyleSheet.create({
    
// })