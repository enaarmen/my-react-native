import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Login  from './../components/Login';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
var userReducers = require('./reducers/user');
var login = require('./actions/index');

let store = createStore(combineReducers({ ...userReducers }));

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View>
            <Provider store={store}>
                <Text>
                    () { <App /> }
                </Text>
            </Provider>
            </View>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            () => { <Login/> }
        );
    }
}

//AppRegistry.registerComponent('biba', () => MyApp);