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
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#F1E5CE'
  }
})

class PortfolioIOS extends Component {

  render () {
    return (
      <NavigatorIOS
      style = {styles.home}
        initialRoute={{
          title: 'Naturalista',
          component: Main
        }}
      />
    )
  }
}

AppRegistry.registerComponent('PortfolioIOS', () => PortfolioIOS)
