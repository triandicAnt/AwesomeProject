/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Greetings extends Component {
  render() {
    return (
      <Text> Hello {this.props.name} !!</Text>
    )
  }
}

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greetings name = "Morticus"></Greetings>
        <Blink text = "Mort ! Mort !"/>
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};
    setInterval(()=>{
      this.setState (previousState => {
        return {showText :!previousState.showText};
      });
    }, 1000);
  }
  render() {
    let display = this.state.showText ? this.props.text: '';
    return(
      <Text>{display}</Text>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Project', () => Project);
