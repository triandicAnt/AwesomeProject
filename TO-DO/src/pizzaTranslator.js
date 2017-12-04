/**
* Translate text to fucking pizza !
**/
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class PizzaTranslator extends Component {
  constructor(props) {
    super(props)
    this.state = {text:''};
  }
  render() {
    return (
      <View style={styles.pizzaView}>
        <TextInput 
          style={styles.textInput}
          placeholder="Type your f**** text here!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={styles.textStyle}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pizzaView : {
    padding: 10
  },
  textStyle : {
    padding :10,
    fontSize : 42,
    color : '#6FA397'
  },
  textInput : {
    height:40,
    borderColor : '#FFFFFF'
  },
});
module.exports = PizzaTranslator;
