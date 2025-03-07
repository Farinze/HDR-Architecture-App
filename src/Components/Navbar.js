import React, { useState } from 'react'
import { Link } from "react-router-dom"
import globe from "../Images/icons8-globe-48.png";
import search from "../Images/icons8-search-50.png"
import { logo } from '../Components/Logolist';
import Markets from '../Modals/Markets';
import Services from '../Modals/Services';
import NewsEvents from '../Modals/NewsEvents';
import About from '../Modals/About';
import Careers from '../Modals/Careers';



export default function Navbar() {

  const [displayMarkt, setDisplayMarkt] = useState(false);
  const [displayService, setDisplayService] = useState(false);
  const [displayNewsEvents, setDisplayNewsEvents] = useState(false);
  const [displayAbout, setDisplayAbout] = useState(false);
  const [displayCareers, setDisplayCareers] = useState(false);

  return (
    <header className='lg:hidden xl:flex xl:items-center xl:w-full xl:h-[80px] xl:gap-6 2xl:gap-1 2xl:h-[90px]'>

    <div className='sm:hidden xl:flex xl:gap-[40px] xl:w-[90%] xl:h-[80px] xl:pr-4 2xl:gap-[88px] 2xl:w-[77%] 2xl:h-[90px]'>

      <div className='xl:w-[70px] xl:h-[80px] xl:ml-[10px] '>
        {
          logo.map((l, index) => (
            <div key={index}>
                <Link to=''><img src={l.imgUrl} alt={l.imgUrl} className='xl:w-[70px] xl:h-[50px] xl:mt-4' /></Link>
            </div>
          ))
        
      }
      </div>
        <ul className='xl:w-[90%] xl:h-[80px] xl:flex xl:items-center xl:gap-8 xl:text-[12px] xl:bg-opacity-100 xl:pr-4 2xl:w-[87%] 2xl:h-[70px] 2xl:gap-11 2xl:font-bold 2xl:font-serif'>
        
          <div className='xl:hover:border-b-[6px] xl:border-b-red-600 cursor-pointer 2xl:h-[100%]'><li className='xl:text-white xl:w-[105px] text-center 2xl:h-[80px] mt-6'><Link to="">100% EMPLOYEE OWNED</Link></li></div>
          <li className='text-white xl:hover:border-b-[6px] xl:border-b-red-600 cursor-pointer xl:h-[50%] mt-7 relative inline-block' onMouseEnter={() => setDisplayMarkt(true)}><Link to="">MARKETS</Link></li>
          <li className='text-white xl:hover:border-b-[6px] xl:border-b-red-600 group cursor-pointer xl:h-[50%] mt-7' onMouseEnter={() => setDisplayService(true)}><Link to="">SERVICES</Link></li>
          <li className='text-white xl:hover:border-b-[6px] xl:border-b-red-600 cursor-pointer xl:h-[50%] mt-7'><Link to="">PORTFOLIO</Link></li>
          <li className='text-white xl:hover:border-b-[6px] xl:border-b-red-600 cursor-pointer xl:h-[50%] mt-7'><Link to="">INSIGHTS</Link></li>
          <div className='xl:hover:border-b-[6px] xl:border-b-red-600 cursor-pointer 2xl:h-[100%]'><li className='xl:text-white text-center 2xl:h-[80px] mt-6' onMouseEnter={() => setDisplayNewsEvents(true)}><Link to="">NEWS & EVENTS</Link></li></div>
          <div className='xl:hover:border-b-[6px] xl:border-b-red-600 cursor-pointer 2xl:h-[100%]'><li className='xl:text-white text-center 2xl:h-[80px] mt-6' onMouseEnter={() => setDisplayAbout(true)}><Link to="">ABOUT US</Link></li></div>
          <li className='text-white xl:hover:border-b-[6px] xl:border-b-red-600 cursor-pointer xl:h-[50%] mt-7' onMouseEnter={() => setDisplayCareers(true)}><Link to="">CAREERS</Link></li>
          <li className='text-white xl:hover:border-b-[6px] xl:border-b-red-600 cursor-pointer xl:h-[50%] mt-7'><Link to="">LOCATION</Link></li>
          <li className='text-white xl:hover:border-b-[6px] xl:border-b-red-600 cursor-pointer xl:h-[50%] mt-7 2xl:w-[94px]'><Link to="">CONTACT US</Link></li>
        </ul>
        </div>
      <div className='xl:flex xl:items-center xl:gap-1 xl:w-[30%] xl:h-[80px] xl:mr-10 2xl:gap-2 2xl:w-[20%] 2xl:mr-10'>

        <div className='hidden xl:flex xl:items-center xl:gap-1 xl:w-[30%] xl:h-[90px] 2xl:mb-4 2xl:gap-3 2xl:w-[50%]'>
          
           <Link to=''><img src={globe} alt='' className='xl:w-[35px] xl:h-[35px] 2xl:w-[60px] 2xl:h-[25px]' /></Link> 
            <h5 className='xl:hidden xl:text-white xl:w-[300px] 2xl:block 2xl:font-semibold 2xl:font-serif'>SELECT COUNTRY</h5>
        </div>

        <div className='hidden xl:w-[65%] xl:h-[20px] xl:relative xl:flex xl:items-center xl:justify-between xl:border-b-2 xl:border-b-white xl:rounded-[5px] 2xl:w-[50%] 2xl:mb-4'>
          <input type='text' placeholder='Search' className='xl:w[100%] xl:h-[20px] xl:text-[20px] xl:border-0 xl:border-gray-900 xl:rounded-[5px] xl:absolute xl:top-0 xl:bg-inherit 2xl:w-[100%] 2xl:h-[30px] 2xl:-top-[55%] 2xl:text-[18px]' />
          
            <img src={search} alt='' className='xl:w-[30px] xl:h-[28px] xl:text-[20px] xl:absolute xl:left-40 xl:top-[-55%] 2xl:w-[30px] 2xl:h-[28px] 2xl:text-[25px] 2xl:absolute 2xl:left-40 2xl:top-[-53%]' />
          </div>
      </div>
      {displayMarkt && <Markets setDisplayMarkt={setDisplayMarkt} />} 
      {displayService &&  <Services setDisplayService={setDisplayService} />}
      {displayNewsEvents && <NewsEvents setDisplayNewsEvents={setDisplayNewsEvents} />}
      {displayAbout && <About setDisplayAbout={setDisplayAbout} />}
      {displayCareers && <Careers setDisplayCareers={setDisplayCareers} />}
    </header>
  )
}
