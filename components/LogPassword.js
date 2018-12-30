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
        this.pressed = false;
        this.firsttime = true;
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
        this.pressed = true;
        //this.firsttime = false;
        return (this.props.store);
      }
    
    /*renderLog (username, password) {
        this.onLoginButtonPress(username, password);
        return (() => <LoggedIn store={this.props.store} />);
    }*/
    myAddPass(username, password) {
        this.firsttime = false;
        this.setState({ user: { loggedIn: true, username: username, password: password}});
        return (this.state);
    }

    render() {
        console.log("MY state:", this.state);
        /*if (this.state != null && this.pressed && this.state.user.loggedIn)
            return (
                <LoggedIn store={this.state} />
            );*/
        /*else*/
        if (this.state.user.loggedIn) { //this.state.user.loggedIn)
            console.log("Entering LoggedIn")
            return (
                <View><LoggedIn store={this.state} /></View>
            );
        } else if (this.firsttime && this.pass == '') {
            return (
                <View>
                    <Text>Enter your password.</Text>
                    <TextInput onChangeText={(text) => this.pass = text} onEndEditing={() => this.myAddPass(this.props.store.user.username, this.pass)} />
                </View>
            );
        } else if (!this.props.store.user.loggedIn && !this.pressed)
            return (<View><Button title="connect" onPress={() => this.onLoginButtonPress(this.state.user.username, this.state.user.password)} /></View>);
        else
            return(<View><Text>Click on logging button</Text><Button title="connect" onPress={this.onLoginButtonPress(this.state.user.username, this.state.user.password)} /></View>);
        /*else if ('user' in this.state && this.state.user.loggedIn && this.state.user.password != '') {
            <Button title="connect" onPress={() => {this.onLoginButtonPress(this.state.user.username, this.state.user.password); return (<LoggedIn store={this.state} />)}} />
        } */
        /*if (this.state.user.loggedIn)
            return (<View><LoggedIn store={this.state} /></View>);*/
    }
}

////this.setState({ user: { loggedIn: true, username: this.props.store.user.username, password: this.pass}})} />

connect(mapStateToProps, mapDispatchToProps)(LoggedIn);