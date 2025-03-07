import React, { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from "react-router-dom"
import Navbar from './Navbar'
import { logo } from '../Components/SmallNavList';
import YoutubeEmbedAbout from './YoutubeEmbedAbout';
import TransformTrend from '../Components/TransformTrend';
import OurCulture from '../Components/OurCulture';




export default function ImgSlider() {

  const slides = [
   {
    url: "https://www.hdrinc.com/sites/default/files/styles/home/public/2024-05/usdept-agrictulture-model1-d2100-1125.jpg?itok=x-iipOr7",
    title: "National Center for Resilient and Regenerative Agriculture",
    info: "A dynamic research facility dedicated to solving challenges with 21st-century agricultural innovation.",
    action: "AGRICULTURAL INNOVATION ➜" 
   },
   {
    url: "https://www.hdrinc.com/sites/default/files/styles/home/public/2024-05/coral-reef-g3a5d87bf-d2100-1125.jpg?itok=bYJqx7we",
    title: "Reviving Underwater Worlds: A Coral Rescue Mission in the Pacific",
    info: "Rejuvenating a once-barren underwater shoal with the relocation of thousands of coral colonies through planning and innovation.",
    action: "FOLLOW THE JOURNEY ➜"
   },
   {
    url: "https://www.hdrinc.com/sites/default/files/styles/home/public/2024-05/ohio-river-valley-adobe-stock-302266509-d2100-1125.jpg?itok=J0cXp8Av",
    title: "Providing Environmental Justice Through Reliable Flood Protection.",
    info: "An upgraded pump station projected to meet a 10-year, 24-hour storm event pumping a maximum flow of 1.9 billion gallons per day.",
    action: "PADDY'S RUN FLOOD PS ➜" 
  },
  {
    url: "https://www.hdrinc.com/sites/default/files/styles/home/public/2024-05/mta-congestion-tolling-d2100-1125.jpg?itok=nKgpi70_",
    title: "Streamlined Project Coordination in America's Largest City.",
    info: "Our traffic and data experts developed a new roadway app for agencies working in New York City.",
    action: "DISCOVER IROAD ➜"   
  },
  {
    url: "https://www.hdrinc.com/sites/default/files/styles/home/public/2024-05/metro-transit-c-line-brt-d2100-1125.jpg?itok=jmLeoduR",
    title: "A New Approach to Measuring Equity Impacts of Infrastructure.",
    info: "Weighted benefit-cost analyses provide new insights on the value of projects to low-income populations.",
    action: "EXPLORE SEVA ➜"  
  }
  ];

   const [currIndex, setCurrIndex] = useState(0);


   const prevSlide = () => {
      setCurrIndex((currIndex) => (currIndex === 0 ? slides.length - 1 : currIndex - 1))
    //or
    // const isFirstSlide = currIndex === 0;
    // const newSlide = isFirstSlide ? slides.length - 1 : currIndex - 1;
   }


   const nextSlide = () => {
      setCurrIndex((currIndex) => (currIndex === slides.length - 1 ? 0 : currIndex + 1))
      //or
      // const isLastSlide = currIndex === slides.length - 1;
      // const newIndex = isLastSlide ? 0 : currIndex + 1;
      // setCurrIndex(newIndex);
      // myInterval = setInterval(nextSlide, 2000)
      
   }

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((currIndex) => (currIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);


  }, [slides.length]);

  

  return (
  <main className='bg-white max-w-full h-[500vh] overflow-hidden bg- md:max-w-full md:h-[527vh] lg:max-w-full lg:h-[440vh] xl:max-w-full xl:h-[445vh] xl:'>

    <div className='w-screen h-[90vh] group relative md:relative md:h-[100vh] lg:relative lg:h-[100vh] xl:relative xl:h-[107vh]'>

      <div className='w-full h-full flex flex-col absolute'>
      
      <header className={`flex items-center justify-between static w-full h-[50px] xl:${Navbar ? 'bottom-0' : 'bottom-[-200%]'} xl:hidden z-50`}>
      
      <div className='ml-[20px]'>
      {
          logo.map((l, index) => (
            <div key={index}>
                <Link to=''><img src={l.imgUrl} alt={l.imgUrl} className='w-[50px] h-[30px]' /></Link>
            </div>
          ))
        
      }
      </div>
        <div className='flex items-center gap-2 mr-4'>
        <Link to=''><h4 className='font-bold text-'>MENU</h4></Link>
        <Link to=''><RxHamburgerMenu className="text-[25px]" /></Link>
        </div>
    </header>

      <div className='relative flex flex-col w-screen h-[95%] md:absolute md:flex md:flex-col md:w-screen md:h-[100vh] lg:absolute lg:w-screen lg:h-[100vh] xl:absolute xl:w-full xl:h-full'>
         

        <div style={{backgroundImage: `url(${slides[currIndex].url})`}} className='w-full h-[55%] bg-cover duration-500 md:w-full md:h-[60%] md:bg-cover lg:h-[100%] lg:bg-cover lg:brightness-75 xl:h-[100%] xl:bg-cover xl:brightness-75 2xl:h-[100%] 2xl:bg-cover 2xl:brightness-75'></div>

        <div className='xl:absolute xl:top-1 xl:w-full xl:h-[20%]'><Navbar /></div>

          <div className='flex flex-col items-center justify-center absolute top-[310px] text-[rgb(171,169,158,0.2)] w-[95%] h-[40%] ml-[20px] mr-[10px] md:absolute md:left-[-30%] md:flex md:items-center md:justify-center md:w-[95%] md:h-[40%] md:ml-[35%] md:top-[60%] lg:absolute lg:w-[50%] lg:top-[20%] xl:absolute xl:w-[50%] xl:h- xl:top-[150px] xl:right-10'>
              <h1 className='font-sans font-light text-[30px] text-gray-700 w-full mb-[12px] md:text-gray-700 md:mb-[30px] lg:text-white xl:text-white xl:w-[60%] xl:mr-[70px]'>{slides[currIndex]?.title}</h1>
              <h3 className='flex font-sans font-light text-[22px] items-center text-gray-700 md:text-gray-700 lg:text-white xl:text-white xl:w-[70%]'>{slides[currIndex]?.info}</h3>
              <Link to=''>
              <h2 className='mt-[10px] border-b-2 text-[18px] text-gray-700 font-sans border-b-red-700 pb-2 cursor-pointer md:md:text-gray-700 md:mt-[20px] lg:text-white xl:text-white'>{slides[currIndex]?.action}</h2>
              </Link>
              
          </div>
      </div>
        
      </div>

        <button className='hidden group-hover:block absolute top-[28%] translate-y-[50%] p-2 rounded-full shadow bg-black/80 text-2xl left-5 text-gray-800 hover:bg-white md:absolute md:top-[30%] lg:top-[50%]'>
          <BsChevronCompactLeft onClick={prevSlide} size={20} />
        </button>
        <button className='hidden group-hover:block absolute top-[28%] translate-y-[50%] p-2 rounded-full shadow bg-black/80 text-2xl right-5 text-gray-800 hover:bg-white cursor-pointer md:top-[30%] lg:top-[50%] xl:right-12'>
          <BsChevronCompactRight onClick={nextSlide} size={20} />
        </button>
        <div className="absolute top-[53%] right-[50%] flex gap-2 justify-center py-2 md:absolute md:top-[55%] md:right-[45%] lg:absolute lg:top-[95%] lg:right-[46%] xl:absolute xl:right-[50%] xl:top-[88%] 2xl:absolute 2xl:right-[50%] 2xl:top-[88%]">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} 
             className={`transition-all w-3 h-3 ${currIndex === slideIndex ? "p-2" : "bg-opacity-80 bg-red-600"} cursor-pointer text-2xl md:w-4 md:h-3`}>
            </div>
          ))}
        </div>

    </div>
    <YoutubeEmbedAbout />
    <TransformTrend />
    <OurCulture />
  </main>
  )
}
