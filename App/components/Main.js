import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'

import WebButton from './WebButton'
import GraphicButton from './GraphicButton'

const styles = StyleSheet.create({
  instructions: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#F1E5CE'
  },
  title: {
    color: '#5E284E',
    fontSize: 20
  },
  name: {
    fontSize: 25,
    color: '#5E284E',
    fontWeight: 'bold'
  },
  paragraph: {
    color: '#5C3F2D',
    fontSize: 12,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    marginTop: 5
  },
  headshot: {
    height: 275,
    width: 250,
    marginTop: 15,
    paddingTop: 15
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10
  }
})

class Main extends Component {
  render () {
    return (
      <View style= {styles.instructions}>
      <Text style ={styles.name}> Naturalista </Text>
      <Image style={styles.headshot} source={require('../images/NaturalistaLogo.png')} />
        <Text style={styles.paragraph}>Welcome to Naturalista Hair Care. {'\n'} Where you can learn how to manage your own natural hair to become healthy and long.</Text>
        <View style={styles.buttons}>
        <WebButton /><GraphicButton />
        </View>
      </View>
    )
  }
}

export default Main
