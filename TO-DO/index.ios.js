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
  Image,
  TextInput,
  View
} from 'react-native';

morticus_url = 'https://vignette.wikia.nocookie.net/penguinsofmadagascar/images/8/85/Morticus_Khan.jpg';

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
        <Image style={styles.image_mort} source={{uri: morticus_url}}/>
        <PizzaTranslator/>
      </View>
    );
  }
}
/**
* Translate text to fucking pizza !
**/

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
  image_mort : {
    width : 200,
    height : 200
  },
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
  }
});

AppRegistry.registerComponent('Project', () => Project);
