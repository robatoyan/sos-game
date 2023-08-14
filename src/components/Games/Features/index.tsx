import React, { useState } from 'react';
import './style.css';
import { Information } from '../../../type/type';

export const Features: React.FC = (): JSX.Element => {
    const [informatin, setInformation] = useState<Information[]>([
        { id: 1, title: "SURVIVE AT ALL COSTS", text: "You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper." },
        { id: 2, title: "CREATE ALLIES & ENEMIES", text: "You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper." },
        { id: 3, title: "IMPRESS THE AUDIENCE", text: "You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper." },
    ])
    const [ids, setIds] = useState<number>(1)
    const [top, setTop] = useState<number>(42)
    const btnId = (obj: Information) => {
        if (obj.id == 1) {
            setTop(42)
        } else if (obj.id == 2) {
            setTop(162)
        } else if (obj.id == 3) {
            setTop(282)
        }
        setInformation(informatin)
    }
    return (
        <div className='GamesBox Features' id='GAME_FEATURES'>
            <div className='information_gaming'>
                <div className='features'>
                    <h3>What’s so special?</h3>
                    <h2>features</h2>
                    <div className='informations' style={{
                        position: "relative"
                    }}>
                        {
                            informatin.map((e: Information) => {
                                return (
                                    <div className='informationGaming' key={e.id}>
                                        <div className='circle_div'>
                                            <div className='circle' onClick={() => {
                                                btnId(e)
                                                setIds(e.id)
                                            }}></div></div>

                                        <div className='informatinData'>
                                            <h3>{e.title}</h3>
                                            {e.id == ids ?
                                                <p>{e.text}</p>
                                                :
                                                <></>
                                            }
                                        </div>


                                    </div>
                                )
                            })
                        }
                        <div className='lineGaming' style={{
                            width: "26px",
                            height: "26px",
                            borderRadius: "50%",
                            position: "absolute",
                            background: "#FFF",
                            top: `${top}px`,
                            left: "2px",
                            transition: "all 0.6s",
                            zIndex: 1
                        }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}