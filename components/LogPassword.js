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
import LoggedIn from './LoggedIn';

function mapStateToProps(state) { return {user: state.userReducer.user}; }
function mapDispatchToProps(dispatch) { return bindActionCreator(dispatch)}

export default class LogPassword extends Component {
    constructor(props) {
        super(props);
        this.pass = '';
    }

    onLoginButtonPress(username, password) {
        this.setState(this.props.store = {
          user: {
            loggedIn: true,
            username: username,
            password: password
          }
        });
      }
    
    /*renderLog (username, password) {
        this.onLoginButtonPress(username, password);
        return (() => <LoggedIn store={this.props.store} />);
    }*/

    render() {
        console.log("MY STATES:", this.state);
        if (!this.state || !this.state.user.loggedIn) {
            return (<View>
                <Text>Enter your password.</Text>
                <TextInput onChangeText={(text) => this.pass = text} onEndEditing={() => {this.setState({ user: { loggedIn: true, username: this.props.store.user.username, password: this.pass}})}} />
                <Button title="connect" onPress={() => {this.onLoginButtonPress(this.state.user.username, this.pass)}} />
            </View>
            );
        } else {
            return (
                <LoggedIn store={this.state} />
            );
        }
        /*else if ('user' in this.state && this.state.user.loggedIn && this.state.user.password != '') {
            <Button title="connect" onPress={() => {this.onLoginButtonPress(this.state.user.username, this.state.user.password); return (<LoggedIn store={this.state} />)}} />
        } */
        /*if (this.state.user.loggedIn)
            return (<View><LoggedIn store={this.state} /></View>);*/
    }
}

connect(mapStateToProps, mapDispatchToProps)(LoggedIn);