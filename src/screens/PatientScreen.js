import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from "react-native";
import DataScreen from "./DataScreen";
import TrendsScreen from "./TrendsScreen";
import { createBottomTabNavigator } from "react-navigation";

class FillIn extends Component {
  render() {
    return (
      <View style={styles.formContainer}>
        <Text>hello</Text>
      </View>
    );
  }
}

const PaitientTab = createBottomTabNavigator({
  Logger: { screen: FillIn },
  Trends: { screen: TrendsScreen },
  Data: { screen: DataScreen }
});

export default PaitientTab;

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
