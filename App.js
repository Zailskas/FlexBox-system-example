import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Button = () => (
  <View style={styles.buttonStyle}>
    <TouchableOpacity>
      <Text>Spausti</Text>
    </TouchableOpacity>
  </View>
)

export default class App extends Component {
  render() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: '#FFF88A'}}>
        <Text>25 procentai</Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#21D296'}}>
        <Text>50 procentu</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#CFF635'}}>
        <View style={styles.containerAndBorder}>
          <Button/>
        </View>
        <View style={styles.containerAndBorder}>
          <Button/>
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
    backgroundColor: '#DDDDDD'
  }
});
