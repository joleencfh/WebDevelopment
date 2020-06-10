import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import * as docActions from './store/DocsActionsCreators';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PictureTaker from './PictureTaker';
// import {SingleDatePicker} from 'react-dates';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import Moment from 'react-moment';
// import 'moment-timezone';

const NewDocScreen = props => {

    // state = {
    //     //this gives you today's date
    //     createdAt: moment(),
    //     //focused is false because we don't want the calendar pop out shown by default
    //     focused: false
    // }
 
     //Prep the hook to capture the title and date input
     const [titleText, setTitleText] = useState('');
     const [dateText, setDateText] = useState('');
     const [pickedPicture, setPickedPicture] = useState();


     //Handler for title input
     const newTitleHandler = titleInput => {
         setTitleText(titleInput);
     };

     //Handler for date input
     const newDateHandler = dateInput => {
        setDateText(dateInput);
    };

    //Handler for the taken picture
    const pictureHandler = picturePath => {
        setPickedPicture(picturePath);
    };

    //get access to the dispatch function by using useDispatch
    const dispatch = useDispatch();

    //Handler for dispatching a 'docAdded' action to the store
    const saveDocHandler = () => {
        //forward all the gathered doc data 
        dispatch(docActions.docAdded(titleText, dateText, pickedPicture)); 
        //to go back to the DocumentsListScreen
        props.navigation.goBack();
    };

   



    return ( 
    <ScrollView>
        
        <View style={styles.form}>
            <View style={styles.header}>
                <Text style={styles.headerText}>New Document</Text>
            </View>
            <Text style={styles.title}>Title</Text>
            <TextInput 
                onChangeText={newTitleHandler} 
                value={titleText}
                style={styles.input}
            />
            <Text style={styles.title}>Date</Text>
            <TextInput 
                onChangeText={newDateHandler} 
                value={dateText}
                style={styles.input}
            />
            {/*/minimum setup for the date picker (source: Github)
             <SingleDatePicker
                date={this.state.createdAt} 
                //this sets what needs to happen once you click on a date
                onDateChange={date => this.setState({ createdAt: date })} 
                focused={this.state.focused} 
                //this sets what happens if we click on the date
                onFocusChange={({ focused }) => this.setState({ focused })} 
                //id="your_unique_id" 
            /> 
             
             //the PictureTaker passes the picture's uri through the onPictureTaken prop (which takes a function)
             //which is pictureHandler in the present component NewDocScreen*/}
            <PictureTaker onPictureTaken={pictureHandler}/>
            <TouchableOpacity style = {styles.buttonSave} onPress= {saveDocHandler}>
                <Text style = {styles.buttonText}> Save Document </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    )
};


const styles = StyleSheet.create({
    form: {
      marginHorizontal: 40,
      marginVertical: 30
    },
    header: {
       margin: 5,
       //backgroundColor: 'white',
       paddingVertical: 10,
       alignItems: 'center'
    },
    headerText: {
        fontSize: 24,
        color: "#C2D3FF",
        fontWeight: '600'
    },
    title: {
       marginHorizontal: 10,
       marginTop: 3,
       fontSize: 16,
       color: '#aaadad',
    },
    input: {
        borderWidth: 1,
        borderColor: '#C2D3FF',
        backgroundColor: 'white',
        margin: 5,
        padding: 10 
    },
    buttonSave: {
        backgroundColor: 'white', 
        width: '100%',
        flexDirection: "column",
        borderColor: "#C2D3FF",
        borderWidth: 5,
        alignItems: 'center',
        marginTop: 30  
  },
  buttonText: {
      color: "#C2D3FF",
      fontSize: 16,
      marginVertical: 10
  },
});


export default NewDocScreen;