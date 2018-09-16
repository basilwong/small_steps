import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Linking,
  FlatList
} from "react-native";
import LoginForm from "./LoginForm";
import qs from "qs";
// client_secret: '9212fdc8b676dea1e1980a870c100b35'

function OAuth(client_id, cb) {
  // Listen to redirection
  Linking.addEventListener('url', handleUrl);
  
  function handleUrl(event){
    console.log(event.url);
    Linking.removeEventListener('url', handleUrl);
    const [, query_string] = event.url.match(/\#(.*)/);
    console.log(query_string);

    const query = qs.parse(query_string);
    console.log(`query: ${JSON.stringify(query)}`);

    cb(query.access_token);
  }
  
  // Call OAuth https://dev.fitbit.com/build/reference/web-api/oauth2/
  const oauthurl = 'https://www.fitbit.com/oauth2/authorize?' +
    qs.stringify({
      client_id: "22D6PQ",
	  response_type: 'token',
	  scope: 'heartrate location',
	  redirect_uri: 'http://127.0.0.1:8000/',
	  expires_in: '31536000' // 1 year
    });

  console.log(oauthurl);
  Linking.openURL(oauthurl).catch(err => console.error('Error processing linking', err));
}

function getData(access_token) {
  fetch(
    'https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json',
  {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${this.state.access_token}`
    },
  }
  ).then((res) => {
    return res.json()
    }).then((res) => {
	  console.log(`res: ${JSON.stringify(res)}`);
	  // get the url
var url = window.location.href;
	  
	  	  alert(url);
    }).catch((err) => {
      console.error('Error: ', err);
    });
}

export default class FlatListBasics extends Component {
  // Called after your data is inserted into the tree
  componentDidMount() {
    OAuth("22D6PQ", getData);
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <Text>Current heart rate: </Text>
      </View>
	  
      /*<View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>*/
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
  },
  item: {
	  color: "green"
  }
});
