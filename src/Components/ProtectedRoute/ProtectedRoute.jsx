import React from 'react'
import {Navigate, navigator} from 'react-router-dom'


export default function ProtectedRoute() {
    // if (localStorage.getItem(;UserToken)){
    //     return props.children
    // }else{

    // }
  return <Navigate to={'/login'}/>
}
