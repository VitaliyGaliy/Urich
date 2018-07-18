import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import './index.css'

export default ({ children, bg, color, link, logout }) => (
    <button className='buttonWrapper'
        style={{ backgroundColor: `${bg}` }}
    >
        {
            link ?
                <Link to={link}
                    className='buttonText'
                    style={{ color: `${color}` }}
                >
                    {children}
                </Link>
                :
                <div className='buttonText'
                    style={{ color: `${color}` }}
                    onClick={logout}
                >
                    {children}
                </div>
        }

    </button >
);