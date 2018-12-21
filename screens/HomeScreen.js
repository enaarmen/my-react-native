var React = require('react-native');
var { AppRegistry } = React;
var login = require('./../components/Login');
var userReducers = require('./reducers/user');

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-native';

let store = createStore(combineReducers({userReducers}));

class App extends React.Compnent {
    rnder() {
        return (
            <Login/>
        );
    }
}

class MyApp extends React.Component {
    render () {
        return (
            <Provider store={store}>
                {() => <App />}
            </Provider>
        );
    }
}

AppRegistry.registerComponent('biba', () => MyApp);