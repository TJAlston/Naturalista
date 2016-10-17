import React, { Component } from 'react'
import {
  StyleSheet,
  AppRegistry,
  // Text,
  // View
  NavigatorIOS
} from 'react-native'
import Main from './App/components/Main'

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#285775'
  }
})

class PortfolioIOS extends Component {

  render () {
    return (
      <NavigatorIOS
      style = {styles.home}
        initialRoute={{
          title: 'TJ ALSTON',
          component: Main
        }}
      />
    )
  }
}

AppRegistry.registerComponent('PortfolioIOS', () => PortfolioIOS)
