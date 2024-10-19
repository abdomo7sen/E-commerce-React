import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart'
import Brands from './Components/Brands/Brands'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Categories from './Components/Categories/Categories'
import Layout from './Components/Layout/Layout'
// import UserContextProvider from './context/userContext';
// import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import  { Toaster } from 'react-hot-toast';
// import ShippingAddress from './Components/shippingAddress/ShippingAddress';
import AllOrders from './Components/AllOrders/AllOrders';
import ShappingAddresss from './Components/ShippingAddresss/ShappingAddresss';
import WishList from './Components/WishList/WishList';


// let routes = createBrowserRouter([
//   { path: '/', element: <Layout />, children: [
//     {index:true , element:<ProtectedRoute><Home/></ProtectedRoute>},
//     {path:'Products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
//     {path:'ProductDetails' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
//     {path:'Cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
//     {path:'Categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
//     {path:'Brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
//     {path:'Login' , element:<Login/>},
//     {path:'Register' , element:<Register/>},
//     {path:'*' , element:<NotFound/>},
//   ] }
// ])
let routes = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    {index:true , element:<Home/>},
    {path:'Products' , element:<Products/>},
    {path:'WishList' , element:<WishList/>},
    {path:'ProductDetails/:id' , element:<ProductDetails/>},
    {path:'shippingAddress/:cartID' , element:<ShappingAddresss/>},
    {path:'AllOrders' , element:<AllOrders/>},
    {path:'Cart' , element:<Cart/>},
    {path:'Categories' , element:<Categories/>},
    {path:'Brands' , element:<Brands/>},
    {path:'Login' , element:<Login/>},
    {path:'Register' , element:<Register/>},
    {path:'*' , element:<NotFound/>},
  ] }
],{basename:"/E-commerce-React"})

function App() {
  
    
     return<> <RouterProvider router={routes}></RouterProvider>



<Toaster/>
</>
  
}

export default App;
