import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: '#FFF55A'}}>
        <Text>25 procentai</Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#57D563'}}>
        <Text>50 procentu</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#FF3232'}}>
        <View style={{flex: 1, borderWidth: 2}}>

        </View>
        <View style={{flex:1, borderWidth: 2}}>

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
});
