import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css'

class News extends Component {
    render() {
        return (
            <div className='newsWrapper'>
                <h1 className="newsTitle">Trump defends Putin from claims of election interference</h1>
                <img className="newsImge" src="https://ichef.bbci.co.uk/news/660/cpsprodpb/B1C1/production/_102450554_mediaitem102450551.jpg" alt="" />
                <p className="newsText" >Following a day of discussions between Presidents Donald Trump and Vladimir Putin in Helsinki, Finland, Mr. Trump left Monday's summit neglecting to hold Putin accountable for Russia's role in interfering in the 2016 presidential election -- saving most of his criticism for America itself.</p>
            </div>
        );
    }
}
export default connect()(News);