import styles from './Brands.module.css';
import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useQuery } from 'react-query';

export default function Brands() {
  const { data, isLoading, error, isFetching } = useQuery('Brands', () =>
    axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  );
  
  
    
//   }
//   const [brands, setBrand] = useState({})
//   const [Loading, setLoading] = useState(true)

//  async function getProducts(){
//    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
//    setBrand(data.data) 
//    setLoading(false)
//   console.log(data);
// //   }
//   useEffect(()=>{
//       getProducts()
//   } , [])
  return <>
    <h2>all brands</h2>
  {isLoading ? 
            <div className=' text-center '>
              <BallTriangle
                height={100}
                width={100}
                radius={5}
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass="d-flex justify-content-center bg-main"
                visible={true}
              /></div>
            : <div className="row">
                {data?.data.data.map(brand =>
                <div className="col-lg-3">
                    <Link to={`/ProductDetails/${brand.id}`}><div className="product">
                        <img src={brand.image} className='w-100' alt={brand.name} />
                        <h3 className='h5'>{brand.name}</h3>
                        </div>
                     {/* </div> */}
                     </Link>
                    </div>
                    )}
            </div> }
  </>
}
