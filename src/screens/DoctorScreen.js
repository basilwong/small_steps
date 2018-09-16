import React from 'react';
import { AppRegistry, ScrollView, Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
// import { ExpoDoctorView } from '@expo/samples';

export default class DoctorScreen extends React.Component {
  static navigationOptions = {
    title: 'Patient List',
  };

  constructor(props) {
      super(props);
      this.state = {
        tableHead: ['Head1', 'Head2', 'Head3' ],
        widthArr: [100, 100, 100]
      }
    }
customFunc = () => {
  alert('hello')
}
  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 3; j += 1) {
        rowData.push(<TouchableOpacity style={{height: 50}} onPress={this.customFunc}><Text>hellllo</Text></TouchableOpacity>);
      }
      tableData.push(rowData);
    }
    return (
      <View style={styles.container}>
         <ScrollView horizontal={true}>
           <View>
             <Table borderStyle={{borderColor: '#C1C0B9'}}>
               <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
             </Table>
             <ScrollView style={styles.dataWrapper}>
               <Table borderStyle={{borderColor: '#C1C0B9'}}>
                 {
                   tableData.map((rowData, index) => (
                     <Row
                       key={index}
                       data={rowData}
                       widthArr={state.widthArr}
                       style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                       textStyle={styles.text}
                     />
                   ))
                 }
               </Table>
             </ScrollView>
           </View>
         </ScrollView>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  header: {
    width: 100,
    height: 50
  }
});
