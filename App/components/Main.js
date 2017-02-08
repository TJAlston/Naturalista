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
    marginHorizontal: 20
  },
  title: {
    color: '#0a5993',
    fontSize: 20
  },
  name: {
    fontSize: 25,
    color: '#0a5993',
    fontWeight: 'bold'
  },
  paragraph: {
    color: '#1a1f22',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5
  },
  headshot: {
    height: 300,
    width: 200,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'rgb(195, 202, 204)'
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
        <Text style ={styles.title}> Hair Care App</Text>
        <Text style={styles.paragraph}>Welcome to Naturalista Hair Care.  Where you can learn how to manage your own natural hair to become healthy and long.</Text>
        <View style={styles.buttons}>
        <WebButton /><GraphicButton />
        </View>
      </View>
    )
  }
}

export default Main
