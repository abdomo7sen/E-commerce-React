import axios from "axios";
import { createContext } from "react";


export let cartContext = createContext();

export default function CartCotextProvider(props){


    let headers = {
        token : localStorage.getItem('userToken')
    }

        function addToCart(productId){

            return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , {
                productId:productId
            } , {
                headers:headers
            })
            .then((Response)=> Response)
            .catch((err)=> err)
        }
        function checkOutSession(cartId , shippingAddress){

            return axios.post(`https://ecommerce.routemisr.comhttps://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000` , {
                shippingAddress
            } , {
                headers:headers
            })
            .then((Response)=> Response)
            .catch((err)=> err)
        }
        function getCartItems(){

            return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`  , {
                headers:headers
            })
            .then((Response)=> Response)
            .catch((err)=> err)
        }
        function deleteCartItem(productId){

            return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart${productId} ` , {
                headers:headers
            })
            .then((Response)=> Response)
            .catch((err)=> err)
        }
        function UpdateCartItem(productId , count) {

            return axios.put(`https://ecommerce.routemisr.com/api/v1/cart${productId} ` ,
            {
                count
            } 
            , {
                headers:headers
            })
            .then((Response)=> Response)
            .catch((err)=> err)
        }
        function addToWishList(productId){

            return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist` , {
                productId:productId
            } , {
                headers:headers
            })
            .then((Response)=> Response)
            .catch((err)=> err)
        }
        function getWishListItem(){

            return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`  , {
                headers:headers
            })
            .then((Response)=> Response)
            .catch((err)=> err)
        }
        function removeWishListItem(productId){

            return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId} ` , {
                headers:headers
            })
            .then((Response)=> Response)
            .catch((err)=> err)
        }
        
        return <cartContext.Provider value={{addToCart , getCartItems , deleteCartItem , UpdateCartItem , checkOutSession , addToWishList, removeWishListItem}}>
            {props.children}
        </cartContext.Provider>

}