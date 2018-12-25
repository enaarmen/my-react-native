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
        this.state = this.props.store;
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
        if (!this.state.user.loggedIn) {
            return (<View>
                <Text>Enter your password.</Text>
                <TextInput onEndEditing={(password) => {this.setState({ user: { loggedIn: false, username: this.props.store.user.username, password: password}})}} />
                <Button title="connnect" onPress={this.state = () => {this.onLoginButtonPress(this.props.store.user.username, this.state.user.password)}} />
            </View>);
        }
        if (this.state.user.loggedIn)
            return (<View><LoggedIn store={this.state} /></View>);
    }
}

connect(mapStateToProps, mapDispatchToProps)(LoggedIn);