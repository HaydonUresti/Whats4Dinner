import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Modal, Text, TextInput, Button} from 'react-native';
import { useState } from 'react';


// A method that contains the code of the pop-up modal (screen)
// Parameters: visible: Whether or not the modal is currently visible and interactive to the user.
//             onClose: This is used to hold the current value of the modal's visibility, in order to change it.
const SaturdayMealNoteModal = ({visible, whatDay, onClose, onSubmit}) => {

    // Creating state to hold the values given in the meal note.
    const [MealTitle, setTitle] = useState('');
    const [MealDescription, setDesc] = useState('');

    // A method that handles the submission of a meal note
    // Parameters: None
    const doSubmit = () => {
        if(!MealTitle.trim()) return onClose();
         console.log(whatDay, MealTitle, MealDescription);
        onSubmit(whatDay, MealTitle, MealDescription)
        setTitle('')
        setDesc('')
        onClose()
    }
    

    // A function that clears all content in a meal note.
    // Parameters: None
    // Returns: None

    const doClear = () => {
        setTitle('')
        setDesc('')
    }

    const doExit = () => {
        doClear
        return onClose();
    };

    const handleTextChange = (text, valueFor) => {
        if(valueFor === 'MealTitle') setTitle(text);
        if(valueFor === 'MealDescription') setDesc(text);
    }

        return (
            <Modal visible={visible} animationType='slide'>
                <View style={styles.container}>
                    <Text>{whatDay}'s meal</Text>
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
    }


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
    }
})

export default SaturdayMealNoteModal;