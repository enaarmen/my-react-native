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
  }

  render() {
    //if (this.props.store.user.loggedIn) {
      if (('user' in this.props.store) && ('loggedIn' in this.props.store.user) && this.props.store.user.loggedIn) {
      return (<View><Text>Logged in {this.props.store.username}.</Text></View>);
    } else {
      return (
      <View>
          <TextInput name='username' onEndEditing={(username) => this.props.store.user.username = username} />
          <TextInput name='password' type='password' onEndEditing={(password) => this.props.store.user.password = password} />
          <TouchableHighlight onPress={this.onLoginButtonPress(this.props.store.user.username, this.props.store.user.password)} />
      </View>
      );
    }
  }
}

connect(mapStateToProps, mapDispatchToProps)(Login);