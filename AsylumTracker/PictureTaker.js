import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {View, Button, StyleSheet, Text, Image, Alert, TouchableOpacity} from 'react-native';



const PictureTaker = props => {

    //a hook to manage the picture taken by the user
    const [chosenPicture, setChosenPicture]= useState();

    //The function that opens the camera
    const takePictureHandler = async () => {
        //it is 'async -await' because the following function checkPermissions returns a promise
        //we don't know when the user will be done taking the picture or cancels the operation
        const permissionsGranted = await checkPermissions();
            if (!permissionsGranted) {
                //if permissions are not granted, I cannot continue
                return;
            }
        
        //since launchCamer... returns a promise, we can store the picture in a constant
        const takenPicture= await ImagePicker.launchCameraAsync({
            quality: 0.8
        });


        
        //set the state to the path (as a string)to my picture
        setChosenPicture(takenPicture.uri);
        //store the picture uri in a prop, which points at a function, which forwards the picture's uri 
        //so it can be used elsewhere (in other screens)
        props.onPictureTaken(takenPicture.uri);
        
    };
    

    const checkPermissions = async () => {
        const userAnswer = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
         //in case the user does not grant permissions, throw an alert
         if (userAnswer.status !== 'granted') {
             Alert.alert(
                 'No Permissions to take pictures!', 
                 'Please change camera permissions in device settings.',
                [{text: "OK"}]
             );
             //if we don't have permissions
             return false;
         }
         //if we have permissions
         return true;
    };

    
    

    return (
    <View style={styles.container}> 
         <View style={styles.picturePreview}>
            {!chosenPicture ? (<Text style={{color:'#cbd3d4'}}>No picture taken.</Text>) : (
            <Image 
                source={{uri: chosenPicture}}
                style={styles.picture}
               />
              )
            }</View>
         <TouchableOpacity style = {styles.button} onPress={takePictureHandler}>
                <Text style = {styles.buttonText}> Take Picture </Text>
        </TouchableOpacity>
    </View>
    )

};

const styles =StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    picturePreview: {
        height: 170,
        width: '100%',
        marginVertical: 10,
        backgroundColor: 'white',
        //to center the placeholder text "no picture taken yet"
        alignItems: 'center',
        justifyContent: 'center'
    },
    picture: {
        width: '100%',
        height: '100%'
    },
    button: {
            
        width: '100%',
        flexDirection: "column",
        alignItems: 'center'   
    },
     buttonText: {
      color: "#C2D3FF",
      fontSize: 16,
      fontWeight: '500',
      marginVertical: 10
     }

});


export default PictureTaker;