// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { View, StyleSheet, Modal, Text, TextInput, Button} from 'react-native';
// import { useState } from 'react';


// // A method that contains the code of the pop-up modal (screen)
// // Parameters: visible: Whether or not the modal is currently visible and interactive to the user.
// //             onClose: This is used to hold the current value of the modal's visibility, in order to change it.
// const WednesdayMealNoteModal = ({visible, whatDay, onClose, onSubmit}) => {

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

// export default WednesdayMealNoteModal;



import React from 'react';
import { View, StyleSheet, Modal, Text, TextInput, Button} from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

// A method that contains the code of the pop-up modal (screen)
// Parameters: visible: Whether or not the modal is currently visible and interactive to the user.
//             onClose: This is used to hold the current value of the modal's visibility, in order to change it.
// Returns: The visual components making up the modal and the function calls usable by the user. 
const WednesdayMealNoteModal = ({visible, whatDay, onClose, onSubmit}) => {


    // Creating state to hold the values given in the meal note.
    const [MealTitle, setTitle] = useState('');
    const [MealDescription, setDesc] = useState('');


    // Creating the tokens AsyncStorage uses to hold data
    let WEDNESDAY_TITLE_KEY = '@Wednesday_Title_input';
    let WEDNESDAY_DESC_KEY = '@Wednesday_Desc_input';
  
    
    // A method that handles the submission of a meal note
    // Parameters: None
    const doSubmit = () => {
        if(!MealTitle.trim()) return onClose();
        //  console.log(whatDay, MealTitle, MealDescription);
        onSubmit(whatDay, MealTitle, MealDescription)
        onSubmitData()
        onClose()
    };
    

//  A function that handles the saving of the given data. Save method: AsyncStorage.
// Parameters: None
// Returns: None
    const onSubmitData = async () => {
        console.log("this is the value of MealTitle: " + MealTitle);
        console.log("this is the value of MealDescription: " + MealDescription);
        try {
            await AsyncStorage.setItem(WEDNESDAY_TITLE_KEY, MealTitle)
            await AsyncStorage.setItem(WEDNESDAY_DESC_KEY, MealDescription)
            console.log("Done submitting")
        } catch (err) {
            console.log("There is an error in onSubmitData")
        };
    };


    // A function that clears all data from Async storage. Not currently in use.
    // Parameters: None
    // Returns: None
    const _clearAll = async () => {
        try {
        await AsyncStorage.clear();
        } catch (error) {
        console.log('There is an error in _clearAll');
        }
    };
    

    // A function that retrieves data from AsyncStorage and sets those values to MealTitle and MealDescription.
    // Will not return data if there is no saved value, MealTitle and MealDescription are not affected. 
    // Parameters: None
    // Returns: None
    const getData = async () => {
        try{
            const curTitle = await AsyncStorage.getItem(WEDNESDAY_TITLE_KEY)
            const curDesc = await AsyncStorage.getItem(WEDNESDAY_DESC_KEY)
            if (curTitle !== null) {
                setTitle(curTitle)
                console.log(curTitle + 'This is value')
            
            if (curDesc !== null) {
                setDesc(curDesc)
            }   }
        }catch(e) {
            console.log('There is an error in getData.')
        };
    };
   

    // A function that clears MealTitle, both the state variable and the one saved in AsyncStorage.
    // Parameters: None
    // Returns: None
    const _clearTitle = async () => {
        try {
            await AsyncStorage.removeItem(WEDNESDAY_TITLE_KEY)
        } catch {
            console.log('There an error in clearTitle()')
        };
    };


    // A function that clears MealDescription, both the state variable and the one saved in AsyncStorage.
    // Parameters: None
    // Returns: None
    const _clearDesc = async () => {
        try {
            await AsyncStorage.removeItem(WEDNESDAY_DESC_KEY)
        } catch {
            console.log('There an error in clearDesc()')
        };
    };


    // A function that calls _clearTitle and _clearDesc and sets MealTitle and MealDescription to empty strings.
    // Parameters: None
    // Returns: None
    const doClear = () => {
        _clearTitle()
        _clearDesc()
        setTitle('')
        setDesc('')
        console.log("After deleting here is title: " + MealTitle)
        console.log("After deleting here is description: " + MealDescription)
    };


    // A function that handles the exiting of the modal. 
    // Parameters: None
    // Returns: onClose(): Sets the visibility of the modal to false which closing it.
    const doExit = () => {
        return onClose();
    };

    
    // A function that handles changing text in both the title and description sections of the modal.
    // The change is made by calling setTitle and setDesc.
    // Parameters: text: What the current input is.
    //             valueFor: The value that is meant to be changed. (MealTitle/MealDescription)
    // Rrturns: None
    const handleTextChange = (text, valueFor) => {
        if(valueFor === 'MealTitle') {
            setTitle(text)
        }
        if(valueFor === 'MealDescription') 
        setDesc(text);   
    };
    


    // Calling getData in order to load in the last saved value of MealTitle and MealDescription. 
    // ---Note--- The clear button must be used to clear data before a new meal note can be made.
    getData()

        return (
            <Modal visible={visible} animationType='slide'>
                <View style={styles.container}>
                    <Text style={styles.dayTitle}>{whatDay}'s meal</Text>

                {/* The text input fields */}
                <TextInput value={MealTitle} placeholder='Meal' style={[styles.input, styles.title]} onChangeText={(text) => handleTextChange(text, 'MealTitle')}></TextInput>
                <TextInput value={MealDescription} multiline placeholder='Notes' style={[styles.input, styles.description]} onChangeText={(text) => handleTextChange(text, 'MealDescription')}></TextInput>
            
            {/* The buttons for the user */}
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
        marginHorizontal: 56,
        fontWeight: 'bold'
    }

});

export default WednesdayMealNoteModal;


