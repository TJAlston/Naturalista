import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
  instructions: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#994F7B',
    padding: 15,
    margin: 5,
    borderRadius: 5
  },
  text: {
    color: '#FFFFFF'
  }
})

class GraphicButton extends Component {
  render () {
    return (
      <TouchableHighlight style={styles.instructions} onPress={() => {}}>
      <Text style={styles.text}>Graphic Design</Text>
      </TouchableHighlight>
    )
  }
}

export default GraphicButton
