/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

import Greetings from './src/greetings';
import PizzaTranslator from './src/pizzaTranslator';
import Blink from './src/blink';
import ButtonBasic from './src/buttonBasic';
import FlatListBasic from './src/flatList';

morticus_url = 'https://vignette.wikia.nocookie.net/penguinsofmadagascar/images/8/85/Morticus_Khan.jpg';

class Project extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Greetings name = "Morticus"></Greetings>
        <Blink text = "Mort ! Mort !"/>
        <Image style={styles.image_mort} source={{uri: morticus_url}}/>
        <PizzaTranslator/>
        <ButtonBasic/>
        <FlatListBasic/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  image_mort : {
    width : 200,
    height : 200
  },
});

AppRegistry.registerComponent('Project', () => Project);
