/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Dimensions } from 'react-native'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'

import data from './data.json';


//const heartrateData = this.getHeartrateData()
//var A = JSON.parse(data);
var C = data.val;
export default class App extends Component{

  render() {
    
    return (      
    <View style={styles.container}>
      <Text style={styles.getStartedText}>
        Heartbeats per Second
      </Text>
      <LineChart
          data={{
          labels: ['10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm'],
          datasets: [{
            
            
            data: [50, 100, 110, 70, 40, 90]

          }]
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />

      <Text style={styles.getStartedText}>
        Anxiety Level
      </Text>
      <LineChart
        data={{
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets: [{
            
            data:[5, 3, 1, 1, 5, 2, 3]

          }]
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
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
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
