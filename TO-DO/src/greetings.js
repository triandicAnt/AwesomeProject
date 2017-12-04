import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
class Greetings extends Component {
  render() {
    return (
      <Text> Hello {this.props.name} !!</Text>
    )
  }
}
module.exports = Greetings;
