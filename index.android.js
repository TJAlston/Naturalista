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
    backgroundColor: '#1a7fc8'
  }
})

class PortfolioIOS extends Component {
  render () {
    return (
      <View className= 'TJ ALSTON'>
      style = {styles.second}
      <Text>
          Welcome to React Native!
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('PortfolioIOS', () => PortfolioIOS)
