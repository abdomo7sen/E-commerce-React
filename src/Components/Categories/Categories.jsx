import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';


export default function Categories() {

  const [product, setproduct] = useState({})
  const [Loading, setLoading] = useState(true)

   async function getproduct(){
     let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
     setproduct(data.data) 
     setLoading(false)
    }
    useEffect(()=>{
        getproduct()
    } , [])

  return <>
    <h2> categories</h2>
  {Loading ? 
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
                {product.map(category =>
                <div className="col-lg-2">
                    <div className="product">
                        <img src={product.image} className='w-100' alt={product.name} />
                        <h3 className='h5'>{category.name.split(' ').splice(0,2).join(' ')}</h3>
                        <button className='btn bg-main text-main-light btn-sm w-100'>Add to cart</button>
                     </div>
                    </div>
                    )}
            </div> }
  </>
}
