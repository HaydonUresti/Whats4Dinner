import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Modal, Text, TextInput, Button} from 'react-native';
import { useState } from 'react';


// A method that contains the code of the pop-up modal (screen)
// Parameters: visible: Whether or not the modal is currently visible and interactive to the user.
//             onClose: This is used to hold the current value of the modal's visibility, in order to change it.
const MealNoteModal = ({visible, whatDay, onClose, onSubmit}) => {

    // Creating state to hold the values given in the meal note.
    const [MondayMealTitle, mondaySetTitle] = useState('');
    const [MondayMealDescription, mondaySetDesc] = useState('');

    const [TuesdayMealTitle, tuesdaySetTitle] = useState('');
    const [TuesdayMealDescription, tuesdaySetDesc] = useState('');

    const [WednesdayMealTitle, wednesdaySetTitle] = useState('')
    const [WednesdayMealDescription, wednesdaySetDesc] = useState('');

    const [ThursdayMealTitle, thursdaySetTitle] = useState('');
    const [ThursdayMealDescription, thursdaySetDesc] = useState('');

    const [FridayMealTitle, fridaySetTitle] = useState('');
    const [FridayMealDescription, fridaySetDesc] = useState('');

    const [SaturdayMealTitle, saturdaySetTitle] = useState('');
    const [SaturdayMealDescription, sturdaySetDesc] = useState('');

    const [SundayMealTitle, sundaySetTitle] = useState('');
    const [SundayMealDescription, sundaySetDesc] = useState('');

    const [CurMealTitle, setCurrentTitle] = useState('');
    const [CurMealDescription, setCurrentDesc] = useState('');


    // A method that handles the submission of a meal note
    // Parameters: None
    const doSubmit = () => {
        if(!CurMealTitle.trim()) return onClose();
        console.log(whatDay, CurMealTitle, CurMealDescription);
        onSubmit(whatDay, CurMealTitle, CurMealDescription)
        setTitle('')
        setDesc('')
        onClose()
    }
    const getCurrentDesc = () => {
        switch (whatDay) {
            case 'Monday':
                
                setCurrentDesc(MondayMealDescription)
                break;
            case 'Tuesday':
     
                setCurrentDesc(TuesdayMealDescription)
                break;
            case 'Wednesday':
     
                setCurrentDesc(WednesdayMealDescription)
                break;
            case 'Thursday':
     
                setCurrentDesc(ThursdayMealDescription)
                break;
            case 'Friday':
     
                setCurrentDesc(FridayMealDescription)
                break;
            case 'Saturday':
     
                setCurrentDesc(SaturdayMealDescription)
                break;
            case 'Sunday':
                
                setCurrentDesc(SundayMealDescription)
                break;
        };
    };

    // const  getCurrentTitle = () => {
    function getCurrentTitle() {
        switch (whatDay) {
            case 'Monday':
                return setCurrentTitle(MondayMealTitle)
                
                break;
            case 'Tuesday':
                setCurrentTitle(TuesdayMealTitle)
                
                break;
            case 'Wednesday':
                setCurrentTitle(WednesdayMealTitle)
                
                break;
            case 'Thursday':
                setCurrentTitle(ThursdayMealTitle)
                
                break;
            case 'Friday':
                setCurrentTitle(FridayMealTitle)
                
                break;
            case 'Saturday':
                setCurrentTitle(SaturdayMealTitle)
                
                break;
            case 'Sunday':
                setCurrentTitle(SundayMealTitle)
                
                break;
        };
    };

    let currentMealDescription = getCurrentDesc
    let currentMealTitle = getCurrentTitle

console.log(whatDay)
    // If day = "Monday":
    //     title = inputted text(.Monday?)   (have completely seperate states, vars or save places for each day?) 
    //     note = inputed note(.Monday?)        

    // A function that clears all content in a meal note.
    // Parameters: None
    // Returns: None

    const doClear = () => {
        setCurrentTitle('')
        setCurrentDesc('')
    }

    const doExit = () => {
        // doClear
        return onClose();
    };

    const handleTextChange = (text, valueFor) => {
        // if(valueFor === 'MealTitle') setTitle(text);
        // if(valueFor === 'MealDescription') setDesc(text);
        switch (whatDay) {
            case 'Monday': 
                console.log(CurMealDescription, CurMealTitle)
                if(valueFor === 'MealTitle') mondaySetTitle(text);
                if(valueFor === 'MealDescription') mondaySetDesc(text);
                console.log(CurMealDescription, CurMealTitle)
                break;

            case 'Tuesday':
                if(valueFor === 'MealTitle') tuesdaySetTitle(text);
                if(valueFor === 'MealDescription') tuesdaySetDesc(text);
                break;

            case 'Wednesday':
                if(valueFor === 'MealTitle') wednesdaySetTitle(text);
                if(valueFor === 'MealDescription') wednesdaySetDesc(text);
                break;

            case 'Thursday':
                if(valueFor === 'MealTitle') tuesdaySetTitle(text);
                if(valueFor === 'MealDescription') tuesdaySetDesc(text);
                break;

            case 'Friday':
                if(valueFor === 'MealTitle') fridaySetTitle(text);
                if(valueFor === 'MealDescription') fridaySetDesc(text);
                break;

            case 'Saturday':
                if(valueFor === 'MealTitle') saturdaySetTitle(text);
                if(valueFor === 'MealDescription') saturdaySetDesc(text);
                break;

            case 'Sunday':
                if(valueFor === 'MealTitle') sundaySetTitle(text);
                if(valueFor === 'MealDescription') sundaySetDesc(text);
                break;
        };
    }

        return (
            <Modal visible={visible} animationType='slide'>
                <View style={styles.container}>
                    <Text>{whatDay}'s meal</Text>
                
                <TextInput value={[currentMealTitle, console.log(currentMealDescription)]} placeholder='Meal' style={[styles.input, styles.title]} onChangeText={(text) => handleTextChange(text, 'MealTitle')}></TextInput>
                
                <TextInput value={currentMealDescription} multiline placeholder='Notes' style={[styles.input, styles.description]} onChangeText={(text) => handleTextChange(text, 'MealDescription')}></TextInput>
            
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

export default MealNoteModal;