import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

const Buttonn = () => (
  <View style={styles.buttonStyle}>
    <TouchableOpacity>
      <Text>Spausti</Text>
    </TouchableOpacity>
  </View>
)

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      fontWeight : '100',
      reiksme: 0
    }
  }
  onClick() {
    const fontWeights = [
      "normal",
      "bold",
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900"
    ];
    
    let randomFontWeight = fontWeights[Math.floor(Math.random()*fontWeights.length)]
    console.log(randomFontWeight)
    this.setState({
      fontWeight: randomFontWeight
    })
  }
  changeNumber(){
    var i = 0
    var newReiksme = 0
    while (i<100){
      newReiksme = this.state.reiksme + 1
      i++
    }
    this.setState({
      reiksme: newReiksme,
    })
  }
  render() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: '#FFF88A'}}>
        <Text style={{fontWeight: this.state.fontWeight}}>33 procentai</Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#21D296'}}>
        <Text>{this.state.reiksme}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#CFF635'}}>
        <View style={styles.containerAndBorder}>
          <Button onPress={()=> this.onClick()}
            title = "Change Font Weight"
          />
        </View>
        <View style={styles.containerAndBorder}>
          <Button 
            onPress={()=> this.changeNumber()}
            title="Push"
          />
        </View>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  containerAndBorder: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#282828',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    borderWidth: 1,
    backgroundColor: '#DDDDDD',
  }, 
});
