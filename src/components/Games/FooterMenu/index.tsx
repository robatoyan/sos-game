import React from 'react';
import './style.css';

export const FooterMenu: React.FC = (): JSX.Element => {
    return (
        <div className='Footer'>
            <div className='GamingMenu FooterMenu'>
                <img src='imgGameTop/gamesLogo.png' />
                <ul className='Games-Menu'>
                    <li><a href='#Main'>MAIN</a></li>
                    <li><a href='#Social_Battle'>ABOUT</a></li>
                    <li><a href='#GAME_FEATURES'>GAME FEATURES</a></li>
                    <li><a href='#System_Requiremnt'>SYSTEM REQUIREMENTS</a></li>
                    <li><a href='#QUOTES'>QUOTES</a></li>
                </ul>
                <ul className='MenuIcons'>
                    <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                    <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                    <li><i className="fa fa-youtube-play" aria-hidden="true"></i></li>
                </ul>
            </div>
            <div className='Outpost_Games'>
                <h2> © 2018 Outpost Games, Inc. All Rights Reserved</h2>
                <div>
                    <h3>Privacy Policy</h3>
                    <h4>Terms of Services</h4>
                    <h5>Code of Conduct </h5>
                </div>
            </div>
        </div>
    )
}