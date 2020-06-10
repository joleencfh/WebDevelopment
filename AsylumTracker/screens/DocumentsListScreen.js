import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import {useSelector} from 'react-redux';
import DocCard from './DocCard';





const DocumentsListScreen = props => {
    
    //useSelector is generally used to access data in redux
    //and in docsReducer, to select the docs key (see startState const)
    //useSelector to select the slice managed with the docsReducer reducer('docs')
    const docs = useSelector(state => state.docs.docs);
    

    return (
    //The list of Document rendered as document cards
    <ScrollView style={styles.screen}>
             
        <FlatList 
         data={docs} 
         //to tell the flatlist where to find a unique id for every item
         //toString because apparently all keys must now be string values.
         keyExtractor={doc => doc.id.toString()}
         //to render each item
         renderItem={docData => (
            <DocCard 
                onSelect={() => {
                 props.navigation.navigate(
                   'DocCard', 
                   //pass info I need to display the DocCard screen
                   {docTitle: docData.item.title,
                    docDate: docData.item.date, 
                    docId: docData.item.id,
                    docPicture: docData.item.pictureUri}
                    ) 
                  } 
                }
                title={docData.item.title} 
                date={docData.item.date}
                pictureSection={docData.item.pictureUri}
            //end of DocCard component
            />
        )}
      />
      
      
        
      <View style={styles.buttonsSection}>
        <TouchableOpacity style={styles.button} onPress={() => {
                     props.navigation.navigate('NewDoc')
                }
            }
        >
            <Text style={styles.buttonText}> New Document </Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
    
    );

    };


const styles = StyleSheet.create({
     
button: {
    backgroundColor: 'white',    
    width: '45.5%',
    borderColor: "#C2D3FF",
    borderWidth: 5,
    margin: 20,
    alignItems: 'center'
},
buttonText: {
  color: "#C2D3FF",
  fontSize: 16,
  marginVertical: 10
  
},
screen: {
  flexDirection: 'column',
  marginHorizontal: 10,
  flex: 6
},
buttonsSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}
});


export default DocumentsListScreen;