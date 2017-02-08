import React, { Component } from 'react'
import {
  StyleSheet,
  AppRegistry,
  Text,
  View
} from 'react-native'

const styles = StyleSheet.create({
  second: {
    flex: 1,
    backgroundColor: '#5E284E'
  },
  paragraph: {
    color: '#5C3F2D',
    fontSize: 12,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    marginTop: 5
  }
})

class PortfolioIOS extends Component {
  render () {
    return (
      <View className= 'Naturalista'>
      style = {styles.second}
      <Text style={styles.paragraph}>Welcome to Naturalista Hair Care. {'/n'} Where you can learn how to manage your own natural hair to become healthy and long.</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('PortfolioIOS', () => PortfolioIOS)
