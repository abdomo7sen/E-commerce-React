import React, { useContext, useState } from 'react';
import axios from 'axios';
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { cartContext } from '../../context/cartContext';
import toast from 'react-hot-toast';

export default function Products() {
  const [searchTerm, setSearchTerm ] = useState('');
  const { data, isLoading, error, isFetching } = useQuery('Products', () =>
    axios.get('https://ecommerce.routemisr.com/api/v1/products')
  );

  
  const filteredProducts = data?.data.data.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  let {addToCart , addToWishList} = useContext(cartContext)
  async function postToCart(id){
    let {data} = await addToCart(id)
    if (data.status == 'success') {
      toast.success(data.message)
    }
  }
  async function postToWishList(id){
    let {data} = await addToWishList(id)
    if (data.status == 'success') {
      toast.success(data.message)
    }
  }

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <h2>all Products</h2>
      <div>
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search products"  className='w-100'/>
      </div>
      {isLoading ? (
        <div className="text-center">
          <BallTriangle height={100} width={100} radius={5} ariaLabel="ball-triangle-loading" visible={true} />
        </div>
      ) : (
        <div className="row">
          {filteredProducts.map(product => (
            <div className="col-lg-2" key={product.id}>
              <Link to={`/ProductDetails/${product.id}`}>
                <div className="product">
                  <img src={product.imageCover} className="w-100" alt={product.title} />
                  <span className="font-sm text-main">{product.category.name}</span>
                  <h3 className="h5">{product.title.split(' ').splice(0, 2).join(' ')}</h3>
                  <div className="d-flex py-3 justify-content-between align-content-center">
                    <span className="font-sm">{product.price}EGP</span>
                    <span className="font-sm">
                      <i className="fas fa-star rating-color me-1"></i>
                      {product.ratingsAverage}
                    </span>
                  </div>
                </div>
              </Link>
              <button onClick={()=> postToWishList(product.id)}><span className='ms-auto'>
                  <i class="fa-solid fa-heart text-dark"></i>
                    </span></button>
                  <button onClick={()=> postToCart(product.id)} className="btn bg-main text-main-light btn-sm w-100">+ Add</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}