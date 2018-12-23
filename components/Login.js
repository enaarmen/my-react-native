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
import { bindActionCreators } from 'redux'
import { connect } from'react-redux';
import * as Action from '../screens/actions'

let previousState = null;

function mapStateToProps(state) { return {user: state.userReducer.user}; }
function mapDispatchToProps(dispatch) { return bindActionCreator()}

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  onLoginButtonPress(username, password) {
    this.props.store = {
      user: {
        loggedIn: true,
        username: username,
        password: password
      }
    };
    return (this.props.store);
  }

  render() {
    //if (this.props.store.user.loggedIn) {
      if (previousState == null) {
        return (
          <View>
            <Text>enter username to continue.</Text>
            <TextInput onEndEditing={previousState = (text) => this.setState({ user: { loggedIn: false, username: text, password: ""}})} />
          </View>
          );
      } else if (('store' in this.props) && ('user' in this.props.store) && ('loggedIn' in this.props.store.user) && this.props.store.user.loggedIn) {
        return (<View><Text>Logged in {this.props.store.username}.</Text></View>);
      } else if (previousState != null && 'store' in previousState.props && previousState.props.store.user.username != "") 
      {
        return (
          <View>
            <TextInput onEndEditing={previousState = (text) => this.setState({ user: { loggedIn: false, username: previousState.props.store.user.username, password: text } })} />
            <Button onPress={this.onLoginButtonPress(previousState.props.store.user.username,  previousState.props.store.user.password )} />
          </View>
        );
      }
    }
  }


connect(mapStateToProps, mapDispatchToProps)(Login);