import React from 'react'
import slider1 from '../../Assets/images/slider-image-3.jpeg'
import slider2 from '../../Assets/images/slider-image-2.jpeg'
import slider3 from '../../Assets/images/slider-image-1.jpeg'
import img1 from '../../Assets/images/grocery-banner.png'
import img2 from '../../Assets/images/grocery-banner-2.jpeg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainSlider() {
    var settings = {
        dots: false,
        infinite: true,
        autoplaySpeed:2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
  return <>
    <div className="row my-3 gx-0">
        <div className="col-md-9" style={{ maxWidth: '800px' }}>
            <Slider  {...settings}>
                <img src={slider1} height={400} className='w-100' alt="" />
                <img src={slider2} height={400} className='w-100' alt="" />
                <img src={slider3} height={400} className='w-100' alt="" />
            </Slider>
        </div>
        <div className="col-md-3">
            <div className="images">
                <img src={img1} className='w-100' height={200} alt="" />
                <img src={img2} className='w-100' height={200} alt="" />
            </div>
        </div>
    </div>
    </>
}
