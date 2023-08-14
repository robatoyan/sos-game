import React, { useState } from 'react';
import './style.css';
import { Quotes } from '../../../type/type';

export const PressQuotes: React.FC = (): JSX.Element => {
    const [quotes, setQuotes] = useState<Quotes[]>([
        { id: 1, img: "/imgPressQuotes/img1User.jpg", name: "EVAN LAHTI", programmer: "PC Gamer", comments: "“One of my gaming highlights of the year.”", date: "October 18, 2018" },
        { id: 2, img: "/imgPressQuotes/img2User.png", name: "JADA GRIFFIN", programmer: "Nerdreactor", comments: "The next big thing in the world of streaming and survival games", date: "December 21, 2018" },
        { id: 3, img: "/imgPressQuotes/img3User.png", name: "AARON WILLIA ", programmer: "Uproxx", comments: "Snoop Dogg Playing The Wildly Entertaining  Is Ridiculous", date: " December 24, 2018" }
    ])
    return (
        <div className='GamesBox PressQuotes' id='QUOTES'>
            <div className='OurMind'>
                <h3>What people think?</h3>
                <h2>Press quotes</h2>
                <p>
                    Our goal is to create a product and service that<br />
                    you’re satisfied with and use it every day. This is<br />
                    why we’re constantly working on our services to make it<br />
                    better every day and really listen to what our users has to say.
                </p>
                <button>Read More Testimonials</button>
            </div>
            <div className='OurMindComming'>
                {
                    quotes.map((e: Quotes) => {
                        return (
                            <div key={e.id} className='UserComments'>
                                <div className='UserData'>
                                    <div className='imgUser'><img src={e.img} /></div>
                                    <div className='userName_Programmer'>
                                        <h2>{e.name}</h2>
                                        <h3>{e.programmer}</h3>
                                    </div>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </div>
                                <div className='UserComm'>
                                    <p>{e.comments}</p>
                                    <h3>{e.date}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}