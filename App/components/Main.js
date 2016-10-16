import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

class Main extends Component {

  render () {
    return (
      <View style= {styles.instructions}>
        <Text> Testing the Router</Text>
      </View>
    )
  }
}

export default Main
