import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from "react-native";
import DataScreen from "./DataScreen";
import { createBottomTabNavigator } from "react-navigation";

class DoctorMain extends Component {
  render() {
    return (
      <View style={styles.formContainer}>
        <Text>hello</Text>
      </View>
    );
  }
}

const DoctorTab = createBottomTabNavigator({
  Patients: { screen: DoctorMain },
  Trends: { screen: DataScreen }
});

export default DoctorTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    width: 120,
    height: 120
  },
  description: {
    color: "white",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.9
  }
});
