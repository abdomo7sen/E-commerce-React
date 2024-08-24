import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import Slider from 'react-slick';

export default function ProductDetails() {
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

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  async function getProductDetails(id) {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    setDetails(data.data);
    setLoading(false);
  }

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass="d-flex justify-content-center bg-main"
            visible={true}
          />
        </div>
      ) : (
        <div className="row align-items-center">
          <div className="col-md-4">
            {details.images.length > 0 ? (
              <Slider {...settings}>
                {details.images.map((image, index) => (
                  <img src={image} key={index} className="w-100" alt={details.title} />
                ))}
              </Slider>
            ) : (
              <div className="no-image-container">
                <span className="no-image-text">No images available</span>
              </div>
            )}
          </div>
          <div className="col-md-8">
            <div className="details">
              <h3 className="h5">{details.title}</h3>
              <p className="py-3">{details.description}</p>
              <span className="font-sm text-main">{details.category.name}</span>
              <div className="d-flex py-3 justify-content-between align-content-center">
                <span className="font-sm">{details.price}EGP</span>
                <span className="font-sm">
                  <i className="fas fa-star rating-color me-1"></i>
                  {details.ratingsAverage}
                </span>
              </div>
              <button className="btn bg-main text-main-light btn-sm w-100">Add to cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}