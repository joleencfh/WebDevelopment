import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const DocCard = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.card}>
      <Image style={styles.picture} source={{uri: props.pictureSection}} />
      <View style={styles.infoSection}>
        <Text style={styles.title} multiline={true}>{props.title}</Text>
        <Text style={styles.date}>{props.date}</Text> 
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: "#C2D3FF",
    borderBottomWidth: 10,
    margin: 10      
  },
  picture: {
    width: '100%',
    height: 200,
    //in case there's no picture to display, show background filler
    backgroundColor: '#d9dcde',
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    width: 300,
  },
  title: {
    color: '#b5b8bd',
    fontSize: 16,
    fontWeight: "500",
    width: '65%',
    
  },
  date: {
    color: '#d4d5d6',
    fontSize: 16
  }
});

export default DocCard;
