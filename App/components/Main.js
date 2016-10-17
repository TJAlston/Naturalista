import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

const styles = StyleSheet.create({
  instructions: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(201, 237, 240)'
  },
  word: {
    color: '#1a7fc8',
    fontSize: 20
  }
})

class Main extends Component {
  render () {
    return (
      <View style= {styles.instructions}>
        <Text style ={styles.word}> Testing the Router</Text>
      </View>
    )
  }
}

export default Main
