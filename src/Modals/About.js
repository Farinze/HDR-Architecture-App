export default function About({setDisplayAbout}) {

    return (
      <div className='fixed top-[67px] left-[49.3%] bg-gray-200 w-[250px] h-[180px] z-50' onMouseLeave={() => setDisplayAbout(false)}>
      <div className='relative bg-inherit w-full h-[95%] mt-6'>
        
        <div className='w-[95%] h-[19%] hover:bg-gray-900 hover:text-white ml-3'><a href="Markets/Aerospace" className="ml-10 text-[15px] tracking-wide">Awards & Rankings</a> </div>
        <div className="w-[95%] h-[18%] hover:bg-gray-900 ml-3 mt-1"><a href="Markets/Civic" className="ml-10 text-[15px] tracking-wide text-gray-600 hover:text-white">Board of Directors</a></div>
        <div className="w-[95%] h-[18%] hover:bg-gray-900 ml-3 mt-1"><a href="Markets/Government" className="ml-10 text-[14px] tracking-wide text-gray-600 hover:text-white">Corporate Sustainability</a></div>
        <div className="w-[95%] h-[18%] hover:bg-gray-900 ml-3 mt-1"><a href="Markets/Justice" className="ml-10 tracking-wide text-[15px] text-gray-600 hover:text-white">History</a></div>
        <div className="w-[95%] h-[18%] hover:bg-gray-900 ml-3 mt-1"><a href="Markets/Justice" className="ml-10 tracking-wide text-[15px] text-gray-600 hover:text-white">Inclusion, Diversity & Equity</a></div>
    </div>
  </div>
    )
  }