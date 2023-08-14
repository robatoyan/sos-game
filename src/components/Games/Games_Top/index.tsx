import React, { useState } from 'react';
import './style.css';

export const GamesTop: React.FC = (): JSX.Element => {
    const [select, setSelect] = useState<Boolean>(false)
    const [menuBars, setMenuBars] = useState<Boolean>(false)
    return (
        <div className='GamesBox GamesTop'>
            <div className='GamingMenu TopMenu' id='Main'>
                <img src='imgGameTop/gamesLogo.png' className='GameLogoImg' />
                <ul className='Menu'>
                    <li><a href='#Main'>MAIN</a></li>
                    <li><a href='#Social_Battle'>ABOUT</a></li>
                    <li><a href='#GAME_FEATURES'>GAME FEATURES</a></li>
                    <li><a href='#System_Requiremnt'>SYSTEM REQUIREMENTS</a></li>
                    <li><a href='#QUOTES'>QUOTES</a></li>
                </ul>
                {
                    menuBars ?
                        <i className="fa fa-times" aria-hidden="true" onClick={()=>setMenuBars(false)}></i>
                        :
                        <i className="fa fa-bars fa-timesBars" aria-hidden="true" onClick={() => setMenuBars(true)}></i>
                }

                <div className='Leng_Xb_St'>
                    <div className='ENG_Select'>
                        <div className='Eng' onClick={() => setSelect(!select)}>
                            <h2>ENG</h2>
                            {select ?
                                <i className="fa fa-chevron-down" aria-hidden="true" ></i>
                                :
                                <i className="fa fa-chevron-up" aria-hidden="true" ></i>
                            }
                        </div>
                        <div className={select ? 'activ' : 'noActiv'} >
                            <ul>
                                <li>RUS</li>
                                <li>FRA</li>
                                <li>DUE</li>
                            </ul>
                        </div>
                    </div>
                    <div className='line'></div>
                    <img src='imgGameTop/imgLine.jpg' />
                    <img src='imgGameTop/xbox.jpg' className='gameImg' />
                    <img src='imgGameTop/steam.jpg' className='gameImg' />
                </div>
                <div className={menuBars ? 'MenuBars' : "noMenuBars"}>
                    <ul>
                        <li><a href='#Main' onClick={() => setMenuBars(false)}>MAIN</a></li>
                        <li><a href='#Social_Battle' onClick={() => setMenuBars(false)}>ABOUT</a></li>
                        <li><a href='#GAME_FEATURES' onClick={() => setMenuBars(false)}>GAME FEATURES</a></li>
                        <li><a href='#System_Requiremnt' onClick={() => setMenuBars(false)}>SYSTEM REQUIREMENTS</a></li>
                        <li><a href='#QUOTES' onClick={() => setMenuBars(false)}>QUOTES</a></li>
                    </ul>
                </div>
            </div>
            <div className='GameTitle'>
                <h1>SURVIVE AT ALL COSTS</h1>
                <h4>Experience new social battle royale game</h4>
                <div className='button'>Buy Now on Steam <div></div> $14.99</div>
            </div>
            <div className='TheStore'>
                <a href='#Social_Battle'>
                    <h2>The story</h2>
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}
