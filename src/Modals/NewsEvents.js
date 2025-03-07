import React from 'react'

export default function NewsEvents({setDisplayNewsEvents}) {
  return (
    <div className='fixed top-[67px] left-[41%] bg-gray-200 w-[265px] h-[165px] z-50' onMouseLeave={() => setDisplayNewsEvents(false)}>
        <div className='relative bg-inherit w-full h-[95%] mt-6'>
        
            <div className='w-[95%] h-[22%] hover:bg-gray-900 hover:text-white ml-3'><a href="Markets/Aerospace" className="ml-10 text-[15px] tracking-wide">Company News</a> </div>
            <div className="w-[95%] h-[22%] hover:bg-gray-900 ml-3 mt-2"><a href="Markets/Civic" className="ml-10 text-[15px] tracking-wide text-gray-600 hover:text-white">Awards & Achievements News</a></div>
            <div className="w-[95%] h-[22%] hover:bg-gray-900 ml-3 mt-2"><a href="Markets/Government" className="ml-10 text-[14px] tracking-wide text-gray-600 hover:text-white">People News</a></div>
            <div className="w-[95%] h-[21%] hover:bg-gray-900 ml-3 mt-2"><a href="Markets/Justice" className="ml-10 tracking-wide text-[15px] text-gray-600 hover:text-white text-center">Events</a></div>
        </div>
    </div>
  )
}
