import React from 'react'
import award from '../Images/award-ribbon.webp'
import people from '../Images/people-icon.webp'
import world from '../Images/world-icon.webp'

export default function YoutubeEmbedAbout() {

  return (
    <section className='bg-inherit max-w-screen h-[120vh] lg:h-[95vh] xl:h-[98vh]'>
      <main className='relative flex flex-col max-w-screen h-[120vh] bg-gray-100 lg:relative lg:w-[97%] lg:flex lg:flex-row lg:left-10 lg:h-[85vh] lg:mt-[5%] xl:absolute xl:w-[90%] xl:h-[83%] xl:left-52 xl:mt-[4%]'>
        <div className='absolute w-[95%] h-[40%] bg-zinc-500 right-[2.5%] top-14 lg:absolute lg:w-[45%] lg:h-[45%] lg:left-20 lg:top-[29%] xl:absolute xl:left-24 xl:w-[47%] xl:h-[60%] xl:top-[20%]'>
            <div className=''>
              <iframe width="632" height="355" src="https://www.youtube.com/embed/-zlTWukznGw" title="Our Story" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='absolute w-[95%] h-[99%] left-[2.5%] -translate-y-5'></iframe>
            </div>
        </div>
      <div className='absolute top-[40%] left-6 flex flex-col w-screen h-[60%] py-16 lg:absolute lg:w-[40%] lg:top-10 lg:left-[60%] lg:py-0 lg:h-[90%]'>
        <div className='flex items-center border-b-2 border-b-[#d8d8d8;] w-[92%] h-1/5'>
          <h1 className='text-[25px] flex items-center text-gray-900 font-sans font-semibold xl:opacity-70'>Who We Are</h1>
        </div>

        <div className='flex items-center gap-12 w-[92%] h-1/5 border-b-2 border-b-[#d8d8d8;]'>

          <img src={award} alt='ribbon' className='ml-[20px]' />
          <p className='text-[18px] font-sans font-semibold xl:font-light xl:opacity-60'>No. 6, Engineering News-Record</p>
        </div>

        <div className='flex items-center gap-12 w-[92%] h-1/5 border-b-2 border-b-[#d8d8d8;]'>
          <img src={people} alt='people' className='ml-[20px]' />
          <p className='text-[18px] font-sans font-semibold xl:font-light xl:opacity-60'>12k+ Employees</p>
        </div>

        <div className='flex items-center w-[92%] h-1/5 border-b-2 border-b-[#d8d8d8;] gap-12'>
          <img src={world} alt='globe' className='ml-[20px]' />
          <p className='text-[18px] font-sans font-semibold xl:font-light xl:opacity-60'>200+ Offices Worldwide</p>
        </div>
        <div className='flex items-center w-[92%] h-[25%]'>
        <h2 className='border-b-2 border-b-red-600 font-sans font-medium text-[15px] pb-2 xl:opacity-80'>ABOUT US ➜</h2>
        </div>
      </div>

      </main>
    </section>
  )
}
