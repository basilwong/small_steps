import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from "react-native";

export default class Data extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../img/ss_logo.png")} />
          <Text style={styles.description}>Sorry, not connected to FitBit!</Text>
        </View>
        <View style={styles.formContainer}>

        </View>
      </KeyboardAvoidingView>
    );
  }
}

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
