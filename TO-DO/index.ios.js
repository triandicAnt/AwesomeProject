/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
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
        <ButtonBasic/>
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

class ButtonBasic extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

 render() {
   return (
     <View style={styles.container}>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text> Touch Here </Text>
       </TouchableOpacity>
       <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
        </View>
      </View>
    )
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
  },
  buttonContainer: {
   flex: 1,
   justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
});

AppRegistry.registerComponent('Project', () => Project);
