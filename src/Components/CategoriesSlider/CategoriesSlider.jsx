import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Slider from 'react-slick'
export default function CategoriesSlider() {
    var settings = {
        dots: false,
        infinite: true,
        autoplaySpeed:2000,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:false
      };

    function getCategories(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    }
  let {data} = useQuery(`Categories` , getCategories)
  var settings = {
    dots: false,
    infinite: true,
    autoplaySpeed:2000,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows:false
  };
  return <>
  <div className="row my-3 gx-0">
    

    <Slider {...settings}>
    {data?.data.data.map(category => <div key={category._id} className='col'>
                        <img src={category.image} className='w-100' height={200} alt={category.name} />
                </div>) }
    </Slider>
                
    </div>
   
    </>
}
