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
        tableHead: ['Patient', '# of Logs', 'Last Log' ],
        widthArr: [150, 150, 150]
      }
    }
customFunc = () => {
  alert('')
}
  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 3; j += 1) {
        if (j == 0) {
          rowData.push(<TouchableOpacity style={{height: 50}} onPress={this.customFunc}><Text>UserName</Text></TouchableOpacity>);
        } else {
        rowData.push(<TouchableOpacity style={{height: 50}} onPress={this.customFunc}><Text>Not Found</Text></TouchableOpacity>);
        }
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
    backgroundColor: '#ADD8E6',
  },
  header: {
    width: 100,
    height: 50
  }
});
