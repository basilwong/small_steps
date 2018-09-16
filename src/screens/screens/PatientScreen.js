import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import DataScreen from "./DataScreen";
import TrendsScreen from "./TrendsScreen";
import { createBottomTabNavigator } from "react-navigation";

class FillIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Stress: 0,
      Anxiety: 0,
      Breathing: 0,
      Shivering: 0,
      Overall: 0,
      Text: ""
    };
  }
  onPressSubmit() {
    Alert.alert("Log Submitted!");
    console.log(this.state);
    console.log(JSON.stringify(this.state));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "powderblue",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.description}>Stress Level</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Stress: 1 })}
          >
            <Text style={styles.Numbers}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Stress: 2 })}
          >
            <Text style={styles.Numbers}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Stress: 3 })}
          >
            <Text style={styles.Numbers}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Stress: 4 })}
          >
            <Text style={styles.Numbers}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Stress: 5 })}
          >
            <Text style={styles.Numbers}>5</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "skyblue",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.description}>Anxiety Level</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Anxiety: 1 })}
          >
            <Text style={styles.Numbers}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Anxiety: 2 })}
          >
            <Text style={styles.Numbers}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Anxiety: 3 })}
          >
            <Text style={styles.Numbers}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Anxiety: 4 })}
          >
            <Text style={styles.Numbers}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Anxiety: 5 })}
          >
            <Text style={styles.Numbers}>5</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "steelblue",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.description}>Breathing</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Breathing: 1 })}
          >
            <Text style={styles.Numbers}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Breathing: 2 })}
          >
            <Text style={styles.Numbers}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Breathing: 3 })}
          >
            <Text style={styles.Numbers}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Breathing: 4 })}
          >
            <Text style={styles.Numbers}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Breathing: 5 })}
          >
            <Text style={styles.Numbers}>5</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "darkblue",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.description}>Shivering</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Shivering: 1 })}
          >
            <Text style={styles.Numbers}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Shivering: 2 })}
          >
            <Text style={styles.Numbers}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Shivering: 3 })}
          >
            <Text style={styles.Numbers}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Shivering: 4 })}
          >
            <Text style={styles.Numbers}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Shivering: 5 })}
          >
            <Text style={styles.Numbers}>5</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "deepskyblue",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.description}>Overall Severity</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Overall: 1 })}
          >
            <Text style={styles.Numbers}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Overall: 2 })}
          >
            <Text style={styles.Numbers}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Overall: 3 })}
          >
            <Text style={styles.Numbers}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Overall: 4 })}
          >
            <Text style={styles.Numbers}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            OnPress={() => this.setState({ Overall: 5 })}
          >
            <Text style={styles.Numbers}>5</Text>
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={{ flex: 2, backgroundColor: "dodgerblue" }}>
            <Text>Comments:</Text>
            <TextInput
              style={{ height: 40 }}
              placeholder="Write your Comments and Observations Here..."
              onChangeText={text => this.setState({ text })}
              placeholderTextColor="rgba(255,255,255,0.8)"
            />
          </View>
        </KeyboardAvoidingView>
        <View style={{ flex: 1, backgroundColor: "slategray" }}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.onPressSubmit()}
          >
            <Text style={styles.Numbers}>Submit</Text>
          </TouchableOpacity>
        </View>
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
  description: {
    color: "black",
    marginTop: 10,
    width: 125,
    opacity: 0.7,
    fontWeight: "700"
  },
  Numbers: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    color: "black",
    fontWeight: "900"
  },
  buttonContainer: {
    padding: 5,
    backgroundColor: "white",
    opacity: 0.25
  },
  container: {
    flex: 3
  }
});
