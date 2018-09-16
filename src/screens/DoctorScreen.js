import React from 'react';
import { AppRegistry, ScrollView, Image, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
// import { ExpoDoctorView } from '@expo/samples';

export default class DoctorScreen extends React.Component {
  static navigationOptions = {
    title: 'Patient List',
  };

  // export default class ExampleOne extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
  //       tableData: [
  //         ['1', '2', '3', '4'],
  //         ['a', 'b', 'c', 'd'],
  //         ['1', '2', '3', '456\n789'],
  //         ['a', 'b', 'c', 'd']
  //       ]
  //     }
  //   }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
