import React from "react";
import './style.css';

export const NewSletterSub: React.FC = (): JSX.Element => {
    return (
        <div className="GamesBox NewSletterSub">
            <div className="Subscribe">
                <h4>Want to stay in touch?</h4>
                <h2>NEWSLETTER SUBSCRIBE </h2>
                <p>
                    In order to start receiving our news, all you have to do is enter your email <br />
                    address. Everything else will be taken care of by us. We will send you emails <br />
                    containing information about game. We don’t spam.
                </p>
                <div className="GaminEmail">
                    <input/> 
                    <label>Your email address</label>
                    <button>Subscribe now</button>
                </div>
            </div>
        </div>
    )
}