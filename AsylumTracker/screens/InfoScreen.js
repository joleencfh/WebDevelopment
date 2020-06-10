import React from "react";
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";

const InfoScreen = props => {

    return ( 
    <ScrollView style={styles.container}>

        <View style={styles.header}>
            <Image source={require('./images/registration.png')}
                   style={styles.iconImageStyle}
            />
            <Text  style={styles.headerStyle}> Registration </Text>
        </View>
        <View style={styles.description}>
             <Text style= {styles.sectionTitle}>Registration in Germany</Text>
            <Text style= {styles.body}>If you want to seek asylum in Germany, you have to undergo a two-step registration process. First you register as an asylum seeker at the registration center of the State Office of Refugee Affairs at Bundesallee 171.Then you apply for asylum at the Federal Agency für Migration and Refugees – Bundesamt for Migration und Flüchtlinge (BAMF).
            Registration is a process that takes several days.
             </Text>
             <Text style= {styles.sectionTitle}>Registration in Italy</Text>
            <Text style= {styles.body}>Under the Procedure Decree, the asylum claim can be made either at the Border Police upon arrival or at the Immigration Office of the Police (Questura) if the applicant is already on the territory. The intention to seek international protection may be expressed orally or in writing by the person concerned in their own language with the help of a mediator.4

PD 21/2015 provides that asylum seekers who express their wish to apply for international protection before Border Police authorities are to be requested to approach the competent Questura within 8 working days. 
             </Text>
             <Text style= {styles.sectionTitle}>Registration in France</Text>
            <Text style= {styles.body}>If you want to seek asylum in France, you have to undergo a two-step registration process. First you register as an asylum seeker at the registration center of the State Office of Refugee Affairs at Bundesallee 171.Then you apply for asylum at the Federal Agency für Migration and Refugees – Bundesamt for Migration und Flüchtlinge (BAMF).
            Registration is a process that takes several days.
             </Text>
             <Text style= {styles.sectionTitle}>Registration in Greece</Text>
            <Text style= {styles.body}>If you want to seek asylum in Greece, you have to undergo a two-step registration process. First you register as an asylum seeker at the registration center of the State Office of Refugee Affairs at Bundesallee 171.Then you apply for asylum at the Federal Agency für Migration and Refugees – Bundesamt for Migration und Flüchtlinge (BAMF).
            Registration is a process that takes several days.
             </Text>
        </View>
        <View style={styles.linksContainer}>
             <Text></Text>
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
        flex: 8,
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
    }

});


export default InfoScreen;