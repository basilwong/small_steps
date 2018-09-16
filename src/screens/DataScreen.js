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
/*import RNFS from "react-native-fs";

var path = "./data.json";*/

const client_id = "22D6PQ";
const client_secret = "9212fdc8b676dea1e1980a870c100b35";

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
      client_id: client_id,
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
	console.log(`res: ${JSON.stringify(res)}`);
    return res.json()
    }).then((res) => {
	  console.log(`res: ${JSON.stringify(res)}`);
	  
// write the file
/*RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
.then((success) => {
 console.log('FILE WRITTEN!');
})
.catch((err) => {
 console.log(err.message);
})*/
	  
    }).catch((err) => {
      console.error('Error: ', err);
    });
}

export default class FlatListBasics extends Component {
  // Called after your data is inserted into the tree
  componentDidMount() {
    OAuth(client_id, getData);
  }

  constructor(props) {
	  super(props);
	  this.state = {
		data: [
			{ key: "85" },
			{ key: "90" },
			{ key: "60" },
			{ key: "40" },
			{ key: "100"},
			{ key: "110"}
		]
	  };
  }
  
  _renderItem = data => {
	  return <Text style={styles.row}>{data.item.key}</Text>;
  };
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db"
  },
  row: {
	  padding: 42,
	  borderWidth: 1,
	  borderColor: "#DDDDDD"
  }
});
