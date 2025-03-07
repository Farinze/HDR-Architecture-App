import React from 'react'

export default function Services({setDisplayService}) {

  return (
    <div className="hidden group-hover:block fixed top-[67px] left-[22.3%] bg-gray-200 w-[610px] h-[370px] z-50" onMouseLeave={() => setDisplayService(false)}>
        
        <div className='relative flex bg-inherit w-full h-[95%]'> 
            <div className="w-[50%] h-full mt-7">
              <div className='w-[98%] h-[11%] hover:bg-gray-900 hover:text-white ml-3'><a href="Markets/Architecture" className="ml-10 text-[16px] tracking-wide">Architecture</a> </div>
              <div className="w-[98%] h-[11%] hover:bg-gray-900 ml-3 mt-3"><a href="Markets/Enginnering" className="ml-10 text-[14px] tracking-wide text-gray-600 hover:text-white">Coastal Engineering & Restoration</a></div>
              <div className="w-[98%] h-[11%] hover:bg-gray-900 ml-3 mt-3"><a href="Markets/EcoFin" className="ml-10 tracking-wide text-[15px] text-gray-600 hover:text-white">Economic & Finance</a></div>
              <div className="w-[98%] h-[11%] hover:bg-gray-900 ml-3 mt-3"><a href="Markets/EnvSci" className="ml-10 text-[14px] tracking-wide text-gray-600 hover:text-white">Environmental Sciences</a></div>
              <div className="w-[98%] h-[11%] hover:bg-gray-900 ml-3 mt-3"><a href="Markets/PM" className="ml-10 tracking-wide text-[15px] text-gray-600 hover:text-white">Program Management</a></div>
              <div className="w-[98%] h-[11%] hover:bg-gray-900 ml-3 mt-3"><a href="Markets/Research" className="ml-10 tracking-wide text-[15px] text-gray-600 hover:text-white">Research</a></div>
              <div className="w-[98%] h-[11%] hover:bg-gray-900 ml-3 mt-2"><a href="Markets/Sustainability" className="ml-10 tracking-wide text-[15px] text-gray-600 hover:text-white">Sustainability & Resilience</a></div>
          </div>

          <div className="w-[50%] h-full mt-7">
              <div className='w-[95%] h-[11%] hover:bg-gray-900 hover:text-white ml-3'><a href="Markets/AssetMgt" className="ml-10 font-semibold text-[16px] tracking-wide">Asset Management</a> </div>
              <div className="w-[95%] h-[11%] hover:bg-gray-900 ml-3 mt-2"><a href="Markets/Commissioning" className="ml-10 text-[15px] tracking-wide text-gray-600 hover:text-white">Commissioning & Operations</a></div>
              <div className="w-[95%] h-[11%] hover:bg-gray-900 ml-3 mt-2"><a href="Markets/Eng" className="ml-10 text-[14px] tracking-wide text-gray-600 hover:text-white">Engineering</a></div>
              <div className="w-[95%] h-[11%] hover:bg-gray-900 ml-3 mt-2"><a href="Markets/planning" className="ml-10 tracking-wide text-[15px] text-gray-600 hover:text-white">Planning & Consulting</a></div>
              <div className="w-[95%] h-[11%] hover:bg-gray-900 ml-3 mt-2"><a href="Markets/PD" className="ml-10 text-[14px] tracking-wide text-gray-600 hover:text-white">Project Delivery</a></div>
              <div className="w-[95%] h-[11%] hover:bg-gray-900 ml-3 mt-2"><a href="Markets/PH" className="ml-10 tracking-wide text-[15px] text-gray-600 hover:text-white">Public Health</a></div>
              <div className="w-[95%] h-[11%] hover:bg-gray-900 ml-3 mt-2"><a href="Markets/RightofWay" className="ml-10 tracking-wide text-[15px] text-gray-600 hover:text-white">Right of Way</a></div>
          </div>
        </div>
    </div>
  )
}