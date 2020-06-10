import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";






const StepScreen = props => {

             
     return ( 
    <ScrollView style={styles.container}>
       
      
        <View style={styles.header}>
            <Image source={require('./images/registration.png')}
                   style={styles.iconImageStyle}
            />
            <Text  style={styles.headerStyle}> Registration </Text>
        </View>
        <View style={styles.description}>
            <Text style= {styles.sectionTitle}>What is Registration?</Text>
            <Text style= {styles.body}>Registration and identification of refugees is key for the people concerned, as well as for States to know who has arrived, and facilitates access to basic assistance and protection. The process of registration enables the early identification of individuals with specific needs within a population and their referral to an available protection response. The very fact of being registered can protect against refoulement (forced return), arbitrary arrest and detention. </Text>
        </View>
       
        <View style={styles.buttonsSection}>
            <TouchableOpacity style = {styles.button} onPress= {() => {
                     props.navigation.navigate('Info')
              }}>
                <Text style = {styles.buttonText}> Learn More</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress= {() => {
                     props.navigation.navigate('DocsList')
              }}>
                <Text style = {styles.buttonText}> My Documents </Text>
            </TouchableOpacity>
        </View>
        
    </ScrollView>
    )

};


const styles = StyleSheet.create({
    container: {
          backgroundColor: "#fff",
          flex: 1
    },
    header: {
          backgroundColor: "#C2D3FF",
          flexDirection: 'column',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 20,
          paddingVertical: 18
          
    },
    headerStyle: {
          fontSize: 24,
          fontWeight: '400',
          color: 'white'
    },
    description: {
        flex: 6,
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        paddingHorizontal: 30,
        paddingBottom: 30
             
    },
    iconImageStyle: {
        padding: 10,
        margin: 5,
        height: 55,
        width: 55,
        resizeMode: 'stretch',
    },
    body: {
        fontSize: 15,
        lineHeight: 25
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 65
    },
    button: {
          backgroundColor: 'white',    
          width: '45.5%',
          flexDirection: "column",
          borderColor: "#C2D3FF",
          borderWidth: 5,
          alignItems: 'center',
          marginHorizontal: 1  
    },
    buttonText: {
        color: "#C2D3FF",
        fontSize: 16,
        marginVertical: 10
    },
    buttonsSection: {
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 65
    }
});

export default StepScreen;