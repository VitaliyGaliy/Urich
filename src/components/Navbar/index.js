import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import * as actions from "../../actions";

import Button from "../Modules/Button";

class Navbar extends Component {
    render() {
        const { isAuthenticated, logout } = this.props;

        return (
            <div className='navbarWrapper'>
                <div className='navbarItemWrapper'>
                    <div className='navbarItem'>
                        <Link to="/">Main Page</Link>
                    </div>
                    <div className='navbarItem'>
                        <Link to="/profile">Profile Page</Link>
                    </div>
                    <div className='navbarItem'>
                        <Link to="/news">News Page</Link>
                    </div>

                </div>
                {
                    !isAuthenticated ?
                        <Button
                            bg='green'
                            color='white'
                            link='/login'
                        >
                            Login
                </Button>
                        :
                        <Button
                            bg='red'
                            color='white'
                            logout={logout}
                        >
                            LogOut
                </Button>
                }
            </div >
        );
    }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, actions)(Navbar);