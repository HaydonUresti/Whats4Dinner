// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { View, StyleSheet, Modal, Text, TextInput, Button} from 'react-native';
// import { useState } from 'react';


// // A method that contains the code of the pop-up modal (screen)
// // Parameters: visible: Whether or not the modal is currently visible and interactive to the user.
// //             onClose: This is used to hold the current value of the modal's visibility, in order to change it.
// const TuesdayMealNoteModal = ({visible, whatDay, onClose, onSubmit}) => {

//     // Creating state to hold the values given in the meal note.
//     const [MealTitle, setTitle] = useState('');
//     const [MealDescription, setDesc] = useState('');

//     // A method that handles the submission of a meal note
//     // Parameters: None
//     const doSubmit = () => {
//         if(!MealTitle.trim()) return onClose();
//          console.log(whatDay, MealTitle, MealDescription);
//         onSubmit(whatDay, MealTitle, MealDescription)
//         setTitle('')
//         setDesc('')
//         onClose()
//     }
    

//     // A function that clears all content in a meal note.
//     // Parameters: None
//     // Returns: None

//     const doClear = () => {
//         setTitle('')
//         setDesc('')
//     }

//     const doExit = () => {
//         doClear
//         return onClose();
//     };

//     const handleTextChange = (text, valueFor) => {
//         if(valueFor === 'MealTitle') setTitle(text);
//         if(valueFor === 'MealDescription') setDesc(text);
//     }

//         return (
//             <Modal visible={visible} animationType='slide'>
//                 <View style={styles.container}>
//                     <Text>{whatDay}'s meal</Text>
//                 <TextInput value={MealTitle} placeholder='Meal' style={[styles.input, styles.title]} onChangeText={(text) => handleTextChange(text, 'MealTitle')}></TextInput>
//                 <TextInput value={MealDescription} multiline placeholder='Notes' style={[styles.input, styles.description]} onChangeText={(text) => handleTextChange(text, 'MealDescription')}></TextInput>
            
//             <Button title='Save Note' onPress={doSubmit} />
//             <View style={styles.space}/>
//             <Button title='Exit' color='gold' onPress={doExit}/>
//             <View style={styles.space}/>
//             <Button title='Clear Note' color='red' onPress={doClear}/>

            
//                 </View>
//             </Modal>
        
//         )
//     }


//     // A style sheet containing the styles used by the text input fields.
// const styles = StyleSheet.create({
//     input: {
//         borderBottomWidth: 3,
//         borderBottomColor: 'black',
//         fontSize: 22,
//     },
//     container: {
//         paddingHorizontal: 20,
//     },
//     title: {
//         height: 50,
//         margin: 20,
//         fontWeight: 'bold'
//     },
//     description: {
//         marginTop: 25,
//         marginBottom: 20

//     },
//     space: {
//         marginTop: 20,
//     }
// })

// export default TuesdayMealNoteModal;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AsyncStorageStatic} from 'react-native'
import { View, StyleSheet, Modal, Text, TextInput, Button} from 'react-native';
import { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage'

// A method that contains the code of the pop-up modal (screen)
// Parameters: visible: Whether or not the modal is currently visible and interactive to the user.
//             onClose: This is used to hold the current value of the modal's visibility, in order to change it.
const TuesdayMealNoteModal = ({visible, whatDay, onClose, onSubmit}) => {

    // Creating state to hold the values given in the meal note.

   
    

    const [MealTitle, setTitle] = useState('');
    const [MealDescription, setDesc] = useState('');
    let TUESDAY_TITLE_KEY = '@Tuesday_Title_input';
    let TUESDAY_DESC_KEY = '@Tuesday_Desc_input';
  

    
    
    // A method that handles the submission of a meal note
    // Parameters: None
    const doSubmit = () => {
        if(!MealTitle.trim()) return onClose();
        //  console.log(whatDay, MealTitle, MealDescription);
        onSubmit(whatDay, MealTitle, MealDescription)
        onSubmitData()
        
        // getData()
       
        onClose()
    }
    



    const onSubmitData = async () => {
        console.log("this is the value of MealTitle: " + MealTitle);
        console.log("this is the value of MealDescription: " + MealDescription);
        try {
            // if (MealTitle !== null) {
            // await AsyncStorage.setItem(MONDAY_TITLE_KEY, MealTitle)};
            // if (MealDesc !== null) {
            // await AsyncStorage.setItem(MONDAY_DESC_KEY, MealDescription)};
            
            await AsyncStorage.setItem(TUESDAY_TITLE_KEY, MealTitle)
            await AsyncStorage.setItem(TUESDAY_DESC_KEY, MealDescription)
            console.log("Done submitting")
        } catch (err) {
            console.log("There is an error in onSubmitData")
        }
    }

    const _clearAll = async () => {
        try {
        await AsyncStorage.clear();
        console.log('Done');
        } catch (error) {
        console.log(error);
        }
        };
    

    const getData = async () => {
        try{
            const curTitle = await AsyncStorage.getItem(TUESDAY_TITLE_KEY)
            const curDesc = await AsyncStorage.getItem(TUESDAY_DESC_KEY)
            if (curTitle !== null) {
                setTitle(curTitle)
                console.log(curTitle + 'This is value')
            
            if (curDesc !== null) {
                setDesc(curDesc)
                
            }


                
            }
        }catch(e) {

        }
    };

    // _clearAll()

    console.log("og mealTitle :" + MealTitle);
    // getData();
    // console.log("After the getData : " + MealTitle);

    // A function that clears all content in a meal note.
    // Parameters: None
    // Returns: None


    const clearTitle = async () => {
        try {
            await AsyncStorage.removeItem(TUESDAY_TITLE_KEY)
        } catch {
            console.log('There an error in clearTitle()')
        };

    };


    const clearDesc = async () => {
        try {
            await AsyncStorage.removeItem(TUESDAY_DESC_KEY)
        } catch {
            console.log('There an error in clearDesc()')
        };

    };


    const doClear = () => {
        clearTitle()
        clearDesc()
        setTitle('')
        setDesc('')
        console.log("After deleting here is title: " + MealTitle)
        console.log("After deleting here is description: " + MealDescription)
    }

    const doExit = () => {
        doClear
        return onClose();
    };

    

    const handleTextChange = (text, valueFor) => {
        if(valueFor === 'MealTitle') {setTitle(text)
        
            console.log("submitting")
        };
        if(valueFor === 'MealDescription') setDesc(text);
         
    }
    
    getData()

        return (
            <Modal visible={visible} animationType='slide'>
                <View style={styles.container}>
                    <Text style={styles.dayTitle}>{whatDay}'s meal</Text>
                <TextInput value={MealTitle} placeholder='Meal' style={[styles.input, styles.title]} onChangeText={(text) => handleTextChange(text, 'MealTitle')}></TextInput>
                <TextInput value={MealDescription} multiline placeholder='Notes' style={[styles.input, styles.description]} onChangeText={(text) => handleTextChange(text, 'MealDescription')}></TextInput>
            
            <Button title='Save Note' onPress={doSubmit} />
            <View style={styles.space}/>
            <Button title='Exit' color='gold' onPress={doExit}/>
            <View style={styles.space}/>
            <Button title='Clear Note' color='red' onPress={doClear}/>

            
                </View>
            </Modal>
        
        )
    };
    

    // A style sheet containing the styles used by the text input fields.
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 3,
        borderBottomColor: 'black',
        fontSize: 22,
    },
    container: {
        paddingHorizontal: 20,
    },
    title: {
        height: 50,
        margin: 20,
        fontWeight: 'bold'
    },
    description: {
        marginTop: 25,
        marginBottom: 20

    },
    space: {
        marginTop: 20,
    },
    dayTitle: {
        alignContent: 'center',
        fontSize: 25,
        marginHorizontal: 70,
        fontWeight: 'bold'
    }

})

export default TuesdayMealNoteModal;


// I think i need to make it only save when the submit button is called

// Then work on a clear function to clear the saved data



