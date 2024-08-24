import { useFormik } from 'formik';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';

export default function ShappingAddresss() {
    let {checkOutSession}= useContext(cartContext)
    let {cartID} = useParams()

    async function checkOut(values){
       let {data} = await checkOutSession(cartID , values)
       if(data.status =='success'){
        window.location.href = data.session.url
       }

    }

    let formik = useFormik({
        initialValues:{
            details:'',
            phone:'',
            city:'',
        },onSubmit: checkOut
    })
  return <>
    <div>ShippingAddress</div>
    <div className="w-75 mx-auto">
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="details">details</label>
            <input onChange={formik.handleChange} type="text" id='details' name='details' className='form-control mb-3'/>
            <label htmlFor="phone">phone</label>
            <input onChange={formik.handleChange} type="tel" id='phone' name='phone' className='form-control mb-3'/>
            <label htmlFor="city">city</label>
            <input onChange={formik.handleChange} type="text" id='city' name='city' className='form-control mb-3'/>
            <button className='btn bg-main text-light' type='submit'>check out</button>
        </form>
    </div>
    </>
}
