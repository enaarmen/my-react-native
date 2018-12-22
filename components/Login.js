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

class Login extends React.Component {
  onLoginButtonPress(username, password) {
    this.props.login({
      user: {
        loggedIn: true,
        username: username,
        password: password
      }
    });
  }

  render() {
    if (this.props.logged) {
      return (<Text>Logged in {this.props.username}.</Text>);
    } else {
      return (<View>
          <TextInput name='username' onEndEditing={(username) => this.props.username = username}>in there</TextInput>
          <TextInput name='password' type='password' onEndEditing={(password) => this.props.password = password}>just here pass</TextInput>
          <TouchableHighlight onPress={this.onLoginButtonPress(this.props.username, this.props.password)}>  
          </TouchableHighlight>
      </View>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);