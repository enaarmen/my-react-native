import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AppRegistry,
  TextInput,
  Button
} from 'react-native';
import * as Action from '../screens/actions'
import LogPassword from './LogPassword';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = null;
    this.user = '';
  }

  render() {  
    if (!this.state || this.state.user.username == '') {
        //this.state = this.props.store;
        return (
          <View>
            <Text>enter username to continue.</Text>
            <TextInput onChangeText={(text) => this.user = text} onEndEditing={() => this.setState({ user: { loggedIn: false, username: this.user, password: ''}})} />
          </View>
          );
      } else
        return (
          <View>
            <LogPassword store={this.state} />
          </View>
          );
      /*
      else if (this.state.user.loggedIn) {
        return (<LoggedIn username={this.state.user.username} password={this.state.user.password} />);
      } else
        return (<View><Text>You out of context.</Text><Text>Look: {this.state}</Text></View>);
        */

      /*else if (this.prop.store.user.loggedIn) {
        return (
          <LoggedIn username={this.previousState.user.username} password={this.previousState.user.password}
        )
      }*/ /*else if (this.previousState && 'user' in this.previousState && this.previousState.user.username != '' && this.previousState.user.password != '') { 
        return (
        <View>
          
        </View>
        );
      } else if (this.prop.store.user.loggedIn)
          return (<View><Text>Logged in {this.props.store.user.username}.</Text></View>);*/
        /*else
          return (<View><Text>You out of context.</Text><Text>Look: {this.previousState}</Text></View>)*/
    //}
  }
}
  //<Button title='coucou' onPress={this.onLoginButtonPress(this.previousState.user.username, this.previousState.user.username)} />

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  myText: {

  }
});