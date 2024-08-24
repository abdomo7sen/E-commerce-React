import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../context/cartContext';
import { BallTriangle } from 'react-loader-spinner';
import { HttpStatusCode } from 'axios';
import { Link } from 'react-router-dom';

export default function WishList() {
    const { getCartItems, deleteCartItem, UpdateCartItem} = useContext(cartContext);
    const [wishList, setWishList] = useState(null);
    const [loading, setLoading] = useState(true);
  
    async function getItems() {
      try {
        const { data } = await getCartItems();
        setWishList(data);
        setLoading(false);
      } catch (error) {
        console.error('Error retrieving cart items:', error);
        setLoading(false);
      }
    }
  
    async function deleteItem(id) {
      setLoading(true);
      try {
        const { data } = await deleteCartItem(id);
        setWishList(data);
        setLoading(false);
      } catch (error) {
        console.error('Error deleting cart item:', error);
        setLoading(false);
      }
    }
  
    async function UpdateCart(id) {
      setLoading(true);
      try {
        const { data } = await UpdateCartItem(id);
        setWishList(data);
        setLoading(false);
      } catch (error) {
        console.error('Error deleting cart item:', error);
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getItems();
    }, []);
  
    return (
      <>
        <div className="bg-main-light p-2 mt-5">
          <h2>wish List</h2>
          {loading ? (
            <div className="loading">
              <BallTriangle height={100} width={100} radius={5} ariaLabel="ball-triangle-loading" visible={true} />
            </div>
          ) : (
            wishList? <>
              <p className="text-main">numOfCartItem: {wishList?.numOfCartItems}</p>
              <p className="text-main">totalCartPrice: {wishList?.data.totalCartPrice} EGP</p>
              {wishList?.data.products.map((product , index) => (
                <div key={index} className="row align-items-center m-0 border-1 border-bottom">
                  <div className="col-md-1">
                    <div className="img">
                      <img src={product.product.imageCover} alt={product.product.title} />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="item">
                      <h3 className="h5 fw-bold">{product.product.title.split(' ').splice(0, 3).join(' ')}</h3>
                      <p className="text-main fw-bold">price: {product.price} EGP</p>
                      <button onClick={() => deleteItem(product.product.id)} className="btn">
                        <i className="fas fa-trash-can text-danger"></i>Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>:
            <h2>wish List is empty......</h2>
          )}
        </div>
      </>
    );
  }