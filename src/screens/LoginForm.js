import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert
} from "react-native";

// firebase

export default class LoginForm extends Component {
  state = { username: "", password: "" };

  onPressSignUp() {
    Alert.alert("Sign Up Done.. Check your Email!");
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          placeholder="username or email"
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={input => (this.passwordInput = input)}
        />
        <View style={styles.Bcontainer}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Journal", {
                username: this.state.username
              })
            }
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>LOGIN AS PATIENT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Doctor", {
                username: this.state.username
              })
            }
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>LOGIN AS THERAPIST</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.onPressSignUp()}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  Bcontainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "white",
    marginBottom: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    padding: 15,
    backgroundColor: "#2980b9"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700"
  }
});
