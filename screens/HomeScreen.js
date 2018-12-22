import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Login  from './../components/Login';
import { createStore, combineReducers } from 'redux';
import userReducers from './reducers/user';
import { Provider } from 'react-redux';
var login = require('./actions/index');
var user = require('./reducers/user');

let store = createStore(combineReducers({ userReducers }));

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Provider store={store}>
                {() => <App />}
            </Provider>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Login/>
        );
    }
}

//AppRegistry.registerComponent('biba', () => MyApp);