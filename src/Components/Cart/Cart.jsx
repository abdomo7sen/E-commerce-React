import React, { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.css';
import { cartContext } from '../../context/cartContext';
import { BallTriangle } from 'react-loader-spinner';
import { HttpStatusCode } from 'axios';
import { Link } from 'react-router-dom';
export default function Cart() {
  const { getCartItems, deleteCartItem, UpdateCartItem} = useContext(cartContext);
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getItems() {
    try {
      const { data } = await getCartItems();
      setCart(data);
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
      setCart(data);
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
      setCart(data);
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
        <h2>Cart</h2>
        {loading ? (
          <div className="loading">
            <BallTriangle height={100} width={100} radius={5} ariaLabel="ball-triangle-loading" visible={true} />
          </div>
        ) : (
          cart? <>
            <p className="text-main">numOfCartItem: {cart?.numOfCartItems}</p>
            <p className="text-main">totalCartPrice: {cart?.data.totalCartPrice} EGP</p>
            {cart?.data.products.map((product , index) => (
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
                    <div className="col-md-1">
                      <div className="count">
                        <button onClick={()=> UpdateCart(product.product.id , product.count +1)} className="btn brdr p-1">+</button>
                        <span className="mx-2">{product.count}</span>
                        <button onClick={()=> UpdateCart(product.product.id , product.count -1)} className="btn brdr p-1">-</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Link to={`/shippingAddress/${cart.data._id}`}> online payment</Link>
          </>:
          <h2>cart is empty......</h2>
        )}
      </div>
    </>
  );
}