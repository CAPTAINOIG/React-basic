import React from 'react'
// import React, { Slider } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import im from '../assets/image/im.jpeg'



function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

const DemoCarousel = () => {

    // function SampleNextArrow(props) {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            // slidesToShow: 3,
            slidesToScroll: 2,
            nextArrow: <Arrow />,
            prevArrow: <Arrow />,
            // initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  
                }
              },
             
            ]
        //   };
      }
    return (

        <div className='container'>
        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          <div className='card'>
            <img src={im} alt="" className='w-100'/>
            <div className='card-body'>
              <h3>React-slick</h3>
            </div>
          </div>
          <div className='card'>
          <img src={im} alt="" className='w-100' />
          <div className='card-body'>
          <h3>React-slick</h3>
        </div>
          </div>
          <div className='card'>
          <img src={im} alt="" className='w-100'/>
          <div className='card-body'>
          <h3>React-slick</h3>
        </div>
          </div>
          <div className='card'>
          <img src={im} alt="" className='w-100'/>
          <div className='card-body'>
          <h3>React-slick</h3>
        </div>
          </div>
          <div className='card'>
          <img src={im} alt="" className='w-100'/>
          <div className='card-body'>
          <h3>React-slick</h3>
        </div>
          </div>
         
        </Slider>
      </div>
    )
}


export default DemoCarousel









