import React from "react"
import Slider from "react-slick";
import Banner1 from "../../assets/banner.JPG";
import './Slider.css';

const SliderSection = () => {

    var settings = {
        
        arrows: false,
        dots: false,
        speed: 500,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,

    };

    return (
        <div className="slider_main" style={{ overflow: "hidden" }}>
            <Slider {...settings}>
                <div>
                    <img src={Banner1} alt="" />
                </div>
                <div>
                    <img src={Banner1} alt="" />
                </div>
                <div>
                    <img src={Banner1} alt="" />
                </div>
                <div>
                    <img src={Banner1} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default SliderSection;
