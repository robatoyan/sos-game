import React from 'react';
import './style.css';
import { EffectCards,Pagination } from "swiper";
import { Swiper, SwiperSlide, } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { SwiperSlider } from './swiperSlide';
import "swiper/css/pagination";


export const SocialBattle: React.FC = (): JSX.Element => {
    return (
        <div className='GamesBox SocialBattle' id='Social_Battle'>
            <div className='GamingData'>
                <div className='royale_game'>
                    <h4>What is SOS?</h4>
                    <h2>
                        social battle
                        royale game
                    </h2>
                </div>
                <div className='SocialBattle_Line'></div>
                <p>
                    Each round, you and 15 other contestants compete to
                    escape a deadly island filled with monsters. The trick is: three people can survive. Will you run
                    solo or form friendships with others to escape?

                    Making the right decisions could be the
                    difference between life and death.
                </p>
            </div>
            <div className='GaminGImgSlider'>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className='SliderImg'><img src='imgSocialBattle/img1.png' /></div></SwiperSlide>
                    <SwiperSlide><div className='SliderImg'><img src='imgSocialBattle/img2.png' /></div></SwiperSlide>
                    <SwiperSlide><div className='SliderImg'><img src='imgSocialBattle/img3.png' /></div></SwiperSlide>
                    <SwiperSlider />
                </Swiper>
            </div>
        </div>
    )
}