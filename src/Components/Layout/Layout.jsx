import React from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
// import Footer from '../../footer/Footer';

export default function Layout() {
  return <>
  <Navbar/>
  <div className="container">
  <Outlet></Outlet>
  {/* <Footer/> */}
  </div>
  </>
}
