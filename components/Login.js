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
          <View>
            <Text>enter username to continue.</Text>
            <TextInput style={borderColor='#000'} onEndEditing={this.previousState.user = (text) => this.setState({ loggedIn: false, username: text, password: ''})} /> 
          </View>
          );
      } else if (this.previousState && 'user' in this.previousState && this.previousState.user.username != '') {
        return (
          <View>
            <TextInput onEndEditing={(this.previousState.user.password = (text) => text)} />
            <Button title='coucou' onPress={this.onLoginButtonPress(this.previousState.user.username, this.previousState.user.username)} />
          </View>
        );
      } else if (this.previousState && 'user' in this.previousState && this.previousState.user.username != '' && this.previousState.user.password != '') { 
        return (
        <View>
          <Button title='bonjour' onPress={this.onLoginButtonPress(this.previousState.user.username, this.previousState.user.password )} />
        </View>
        );
      } else if (this.prop.store.loggedIn)
          return (<View><Text>Logged in {this.props.store.user.username}.</Text></View>);
        else
          return (<View><Text>You out of context.</Text><Text>Look: {this.previousState}</Text></View>)
    }
  }

 connect(mapStateToProps, mapDispatchToProps)(Login);

 const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  myText: {

  }
});