/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ListView,
  TouchableHighlight,
} from 'react-native';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      ds:[{
            AwayTeam: "TeamA",
            HomeTeam: "TeamB",
            Selection: "AwayTeam"
          },
          {
            AwayTeam: "TeamC",
            HomeTeam: "TeamD",
            Selection: "HomeTeam"
          }],
      dataSource:ds,
    }
  }
  componentDidMount(){
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(
        this.state.ds
      ),
    })
  }
  render() {
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderRow.bind(this)}>
      </ListView>
    );
  }
  renderRow(rowData) {
    return(
      <TouchableHighlight
        onPress = {() => this.pressRow(rowData)}
        underlayColor = '#DDD'>
        <View style={styles.row}>
          <Text style={{fontSize:18}}>
            {rowData.AwayTeam} & {rowData.HomeTeam}
          </Text>
          <View style={{flex:1}}>
            <Text style={styles.selectionText}>
              {rowData[rowData.Selection]}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  pressRow(rowData) {
    var newDs = [];
    newDs = this.state.ds.slice();
    newDs[0].Selection = newDs[0]
      == "AwayTeam" ? "HomeTeam" : "AwayTeam";
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newDs)
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30
  },
  isLoading :{
    flex:1,
    paddingTop:20
  },
  row:{
    flex:1,
    flexDirection:'row',
    padding:18,
    borderBottomWidth: 1,
    borderColor: '#d7d7d7',
  },
  selectionText:{
    fontSize:15,
    paddingTop:3,
    color:'#b5b5b5',
    textAlign:'right'
  },
});

module.exports = Movies;
