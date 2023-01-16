import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import Dialog from "react-native-dialog"
import MealPlan from './screens/MealPlan';
import MainScreen from './screens/MainScreen';

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



export default function App() {
 
  

  return (
    
   <MainScreen/>

    
    
    
  );

  
}



