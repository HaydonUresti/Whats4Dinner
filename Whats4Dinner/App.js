import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    

    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Text style={textStyles.headline}>What's 4 Dinner?</Text>
      <View
      style={ days.container }>
      <Text style={textStyles.dayName}>Monday</Text>
      </View>

    
    </View>
   
  );
}



const dayContainer = StyleSheet.create({
  container: {
    flex: 0.25,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

const days = StyleSheet.create({
  container:  {
    width: 80,
    height: 50,
    backgroundColor: '#F5EE9E',
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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