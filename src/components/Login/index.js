import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import Button from "../Modules/Button";
import * as actions from "../../actions";

import './index.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            values: {
                name: '',
                password: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            values: { ...this.state.values, [event.target.name]: event.target.value }
        }
        );

    }

    handleSubmit(event) {
        event.preventDefault();
        const { values: { name, password }, values } = this.state;
        const { login } = this.props;
        if (name === 'Admin' && password === '12345') {
            login(values)
        } else {
            alert('Имя пользователя или пароль введены не верно')
        }
    }


    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { isAuthenticated } = this.props;

        if (isAuthenticated) {
            return <Redirect to={from} />;
        }
        return (
            <form className="loginPageWrapper"
                onSubmit={this.handleSubmit}>
                <div className="loginFormWrapper">
                    <h3 className="">Sign In</h3>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                    <Button
                        bg='#3598db'
                        color='white'
                    >
                        Submit
                    </Button>
                </div>
            </form >
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, actions)(Login);