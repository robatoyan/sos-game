import React from "react";
import { useSwiper } from "swiper/react";



export const SwiperSlider: React.FC = (): JSX.Element => {
    const swiper = useSwiper()
    return (
        <div className="SwiperSlider">
            <button onClick={() => swiper.slidePrev()}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
            <button onClick={() => swiper.slideNext()}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
        </div>
    )
}