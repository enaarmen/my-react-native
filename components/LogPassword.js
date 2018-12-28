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
        this.props.store = this.setState({
          user: {
            loggedIn: true,
            username: username,
            password: password
          }
        });
      }

    render() {
        if (!this.state || ('user' in this.state && !this.state.user.loggedIn)) {
            return (<View>
                <Text>Enter your password.</Text>
                <TextInput onChangeText={(text) => this.pass = text} onEndEditing={() => this.onLoginButtonPress(this.props.store.user.username, this.pass)} />
            </View>
            );
        } else if ('user' in this.state && this.state.user.loggedIn) {
            return (
                <Button title="connect" onPress={() => {return (<View><LoggedIn store={this.state} /></View>)}} />
            );
        } else {
            return (<View><Text>You are out of context.</Text></View>);
        }
    }
}

connect(mapStateToProps, mapDispatchToProps)(LoggedIn);