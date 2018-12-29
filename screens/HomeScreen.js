import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Login  from '../components/Login';
//import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import MyApp from './MyApp';
//var userReducers = require('./reducers/user');
//var Login = require('../components/Login')

//let store = createStore(combineReducers({ ...userReducers }));

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View>
                <Provider store={this.props.store}>
                    <Login store={this.props.store}/>
                </Provider>
            </View>
        );
    }
}

//AppRegistry.registerComponent('biba', () => HomeScreen);