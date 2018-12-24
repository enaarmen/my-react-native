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
    let previousState = null;
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
      if (this.previousState == null) {
        this.previousState = this.props.store;
        return (
          <View style={styles.container}>
            <Text>enter username to continue.</Text>
            <TextInput style={borderColor='#000'} onEndEditing={this.previousState.user = (text) => this.setState({ loggedIn: false, username: text, password: ''})} /> 
          </View>
          );
      } else if (this.previousState && 'user' in this.previousState && this.previousState.user.username != '') {
        return (
          <View style={styles.container}>
            <TextInput onEndEditing={this.previousState.user = (text) => this.SetState({logedIn: false, username: this.previousState.user.username, password: text })} />
            <Button onPress={this.onLoginButtonPress(this.previousState.user.username, this.previousState.user.password )} title='bonjour' />
          </View>
        );
      } else if (this.previousState && 'user' in this.previousState && 'loggedIn' in this.previousState.user && this.previousState.user.loggedIn) {
        return (<View style={styles.container}><Text>Logged in {this.props.store.user.username}.</Text></View>);
      } else {
        return (<View style={styles.container}><Text>You out of context.</Text><Text>Look: {this.previousState}</Text></View>)
      }
    }
  }

 connect(mapStateToProps, mapDispatchToProps)(Login);

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100',
    height: '100'
  },
});