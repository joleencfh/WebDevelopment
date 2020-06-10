import React, {Component} from 'react';
import Highlight from "react-native-highlight-words"
import Icon from "react-native-vector-icons/Ionicons";
import {getWeather} from './weatherAPI';
import {AppRegistry, Text, StatusBar, View, StyleSheet} from 'react-native';




export default class App extends Component<Props> {



  componentWillMount() {
    this.state = {
      weather: "Start",
      temperature: 666
    }
  }


  componentDidMount(){
    this.locate()
  }

   locate() {
     navigator.geolocation.getCurrentPosition(
       //do something in case of success retrieving position data
       (positionData) => getWeather(positionData.coords.latitude,
                                    positionData.coords.longitude)
                          .then(response => this.setState({
                            weather: response.weather,
                            temperature: Math.round(response.temperature)
                          })),
       //do something in case of failure
       (error) => console.log(error),
       //options
       {enableHighAccuracy: true, timeout:10000}
     )
  }


  render() {
    return (
      <View style={[styles.container, {backgroundColor: conditions[this.state.weather].background}]}>
        <StatusBar hidden={true}/>
         <View style={styles.header}>
            <Icon name={icons[this.state.weather]} size={60} color={'white'}/>
            <Text style={styles.temperature}>{this.state.temperature}°</Text>
         </View>
         <View style={styles.body}>
         <Highlight
             highlightStyle={{color: conditions[this.state.weather].color}}
             searchWords={[conditions[this.state.weather].stress]}
             textToHighlight={conditions[this.state.weather].phrase}
             style ={styles.phrase}
         />
            <Text style={styles.comment}>{conditions[this.state.weather].comment}</Text>
         </View>
       </View>
      );
  }
}



const icons = {
  Clouds:"ios-cloud",
  Thunderstorm:"ios-thunderstorm",
  Snow:"ios-snow",
  Drizzle:"ios-umbrella",
  Clear:"ios-sunny",
  Rain:"ios-rainy"
}

const conditions = {
  Start:{
    phrase:"Some Weath'r App",
    comment:"Holdeth on...",
    background: "#8f5a38",
    color: "#b3b3b3",
    stress: "Weath'r"
  },
  Clouds:{
    phrase:"Clouds, those gents maketh a painting out of the sky.",
    comment:"A grey painting.",
    background: "#5e6c82",
  	color: "#cd94e0",
    stress: "painting"
  },
  Thunderstorm:{
    phrase:"Standeth not und'r a tree.",
    comment:"And fly not any kites",
    background:"#05080f",
  	color:"#3e913f",
    stress: "tree"
  },
  Snow:{
    phrase:"Wint'r is coming.",
    comment:"Thee knoweth nothing, Jon Snow.",
    background:"#90a7db",
  	color:"#00040c",
    stress: "coming"
  },
  Rain:{
    phrase:"Und'r thy umbrella.",
    comment:"Ella ella, eh eh eh.",
    background:"#3d918f",
  	color:"#9bb6f2",
    stress:"umbrella"
  },
  Clear:{
    phrase:"Travelling lamp is shining, the weath'r is sweet.",
    comment:"Moveth thy dancing feet.",
    background:"#efc20e",
  	color:"#aa0000",
    stress: "shining"
  },
  Drizzle:{
    phrase: "Rain drops keep falling on thy head",
    comment: "Those gents keep falling." ,
    background:"#557c8c",
  	color:"#101c21",
    stress: "falling"
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#faba10",
      flex: 1
    },
    header: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 20
    },
    body: {
      flex: 4,
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      margin: 15
    },
    temperature: {
      fontSize: 45,
      fontFamily: 'BerkshireSwash-Regular',
      color: 'white'
    },
    phrase: {
      fontSize: 60,
      marginBottom: 15,
      fontFamily: 'BerkshireSwash-Regular',
      color: 'white'
    },
    comment: {
      fontSize: 35,
      fontFamily: 'BerkshireSwash-Regular',
      color: 'white'
    }
  })

AppRegistry.registerComponent('WeatherApp', () => App)
