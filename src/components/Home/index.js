import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="App-title">Welcome to Urich Test Page</h1>
            </div>
        );
    }
}
export default connect()(App);