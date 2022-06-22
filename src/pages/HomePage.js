import React from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import ProductShowcase from '../components/ProductShowcase/ProductShowcase';
import FeelSpecial from '../components/FeelSpecial/FeelSpecial';
import BrandsLove from '../components/BrandsLove/BrandsLove';
import ZakpayExperience from '../components/ZakpayExperience/ZakpayExperience';
import MobileScroll from '../components/MobileScroll/MobileScroll';
import WindowPeak from '../components/WindowPeak/WindowPeak';
import ZakPaySecurity from '../components/ZakPaySecurity/ZakPaySecurity';
import ZakPayStory from '../components/ZakPayStory/ZakPayStory';
import AppRating from '../components/AppRating/AppRating';

const homePage = () => {
  return (

   
    <>
   <Header /> 
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <ZakpayExperience />
      <MobileScroll />
      <div className="non-mobile">
          <WindowPeak />
      </div>
      <ZakPaySecurity />
      <ZakPayStory />

      <AppRating/>
   

      <Footer />

    </>

  );
 
};

export default homePage;