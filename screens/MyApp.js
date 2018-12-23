import React, { Component } from 'react';
import Login  from '../components/Login';



export default class MyApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Login store={this.props.store}/>
        );
    }
}