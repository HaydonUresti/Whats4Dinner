import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Modal, Text, TextInput, Button} from 'react-native';
import { useState } from 'react';


// A method that 
const MealNoteModal = ({visible, onClose}) => {

    // Creating state to hold the values given in the meal note.
    const [MealTitle, setTitle] = useState('');
    const [MealDescription, setDesc] = useState('');

    // A method that handles the submission of a meal note
    // Parameters: None
    const doSubmit = () => {
        if(!MealTitle.trim()) return onClose();
    }

    const doExit = () => {
        if(!MealTitle.trim()) return onClose();
    }

    const handleTextChange = (text, valueFor) => {
        if(valueFor === 'MealTitle') setTitle(text);
        if(valueFor === 'MealDescription') setDesc(text);
    }

        return (
            <Modal visible={visible} animationType='slide'>
                <View style={styles.container}>
                <TextInput value={MealTitle} placeholder='Meal' style={[styles.input, styles.title]} onChangeText={(text) => handleTextChange(text, 'Mealtitle')}></TextInput>
                <TextInput value={MealDescription} multiline placeholder='Notes' style={[styles.input, styles.description]} onChangeText={(text) => handleTextChange(text, 'MealDescription')}></TextInput>
            
            <Button title='Save Note' onPress={doSubmit} />
            <Button title='Discard Note' color='red' onPress={doExit}/>

            
                </View>
            </Modal>
        
        )
    }

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
    buttonStyle: {
        marginBottom: 10,
        color: 'orange'
    }
})

export default MealNoteModal;