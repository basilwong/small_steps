import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoDoctorView } from '@expo/samples';

export default class DoctorScreen extends React.Component {
  static navigationOptions = {
    title: 'Doctor',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoDoctorView and replace it with your
           * content, we just wanted to provide you with some helpful Doctor */}
        <ExpoDoctorView />
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
