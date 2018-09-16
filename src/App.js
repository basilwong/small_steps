import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import PatientScreen from "./screens/PatientScreen";
import DoctorScreen from "./screens/DoctorScreen";
import TrendsScreen from "./screens/TrendsScreen";
import DataScreen from "./screens/DataScreen";
import { createStackNavigator } from "react-navigation";
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "<YOUR-API-KEY>",
  authDomain: "<YOUR-AUTH-DOMAIN>",
  databaseURL: "<YOUR-DATABASE-URL>",
  storageBucket: "<YOUR-STORAGE-BUCKET>"
};
firebase.initializeApp(firebaseConfig);

class Start extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Welcome to Therapy Journal </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Start"
            onPress={() => this.props.navigation.navigate("Login")}
          />
        </View>
      </View>
    );
  }
}

const App = createStackNavigator({
  Home: { screen: Start },
  Login: { screen: LoginScreen },
  Journal: { screen: PatientScreen },
  Doctor: { screen: DoctorScreen },
  Trend: { screen: TrendsScreen }
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 20
  },
  title: {
    color: "grey",
    fontSize: 25,
    fontWeight: "bold"
  },
  subtitle: {
    color: "grey",
    fontWeight: "200"
  }
});
