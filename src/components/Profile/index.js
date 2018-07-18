import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css'

class Profile extends Component {
    render() {
        return (
            <div className="profileWrapper">
                <h1 className="profileTitle">Profile</h1>
                <img className="profileImge" src="http://interactive.nydailynews.com/2016/05/simpsons-quiz/img/simp1.jpg" alt="" />
                <p className="profileText" >Homer Jay Simpson is a fictional character and the main protagonist of the American animated sitcom The Simpsons as the patriarch of the eponymous family. He is voiced by Dan Castellaneta and first appeared on television, along with the rest of his family, in The Tracey Ullman Show short "Good Night" on April 19, 1987. Homer was created and designed by cartoonist Matt Groening while he was waiting in the lobby of James L. Brooks' office. Groening had been called to pitch a series of shorts based on his comic strip Life in Hell but instead decided to create a new set of characters. He named the character after his father, Homer Groening. After appearing for three seasons on The Tracey Ullman Show, the Simpson family got their own series on Fox that debuted December 17, 1989.</p>
            </div>
        );
    }
}
export default connect()(Profile);