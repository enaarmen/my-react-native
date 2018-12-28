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
import { bindActionCreators } from 'redux';

export default class LoggedIn extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View>
                <Text>Bonjour {this.props.store.user.username}.</Text>
                <Text>tu t'es connecté avec le mot de passe: {this.props.store.user.password}.</Text>
            </View>
        );
    }
}