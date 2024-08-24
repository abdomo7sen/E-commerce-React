import React, { useEffect, useState } from 'react';
// import styles from './Home.module.css';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import MainSlider from '../MainSlider/MainSlider';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import TestSlider from '../TestSlider/TestSlider';

export default function Home() {



  return <>
  <MainSlider/>
  <CategoriesSlider/>
  <FeaturedProducts/>
 
  </>
}
