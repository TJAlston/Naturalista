import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'

const styles = StyleSheet.create({
  instructions: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  title: {
    color: '#0a5993',
    fontSize: 20
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
    marginBottom: 5
  }
})

class Main extends Component {
  render () {
    return (
      <View style= {styles.instructions}>
      <Image style={styles.headshot} source={require('../images/Headshot2.jpg')} />
        <Text style ={styles.title}> Web Designer</Text>
        <Text style={styles.paragraph}>Thank you for taking the time to view my page. I am a Web Designer and Developer that has experience working with HTML, CSS and Javascript. I am also a recent graduate of The Iron Yard with a certification in Front-End Engineering.</Text>
      </View>
    )
  }
}

export default Main
