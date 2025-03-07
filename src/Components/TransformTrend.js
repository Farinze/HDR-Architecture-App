import React from 'react'
import { Link } from "react-router-dom"
import { ceo } from "../Components/Logolist";

export default function TransformTrend() {

  return (
    <div className='mt-[10px] bg-inherit
    w-screen h-[100vh] md:bg-inherit md:max-w-screen md:h-[115vh] lg:bg-inherit lg:w-screen lg:h-[96vh] xl:bg-inherit xl:max-w-screen xl:h-[102vh]'>
      <main className='relative flex flex-col bg-zinc-800 max-w-screen h-full md:relative md:h-full lg:relative lg:flex lg:max-w-screen lg:bg-zinc-800 xl:relative xl:flex xl:bg-zinc-800 xl:max-w-full xl:right-0'>
        <div className='absolute w-[98%] h-[70vh] top-[4%] left-4 md:absolute md:w-[98%] md:h-[82vh] lg:absolute lg:bg-zinc-800  lg:w-screen lg:h-[78vh] lg:left-0 xl:absolute xl:max-w-full xl:h-full 2xl:absolute 2xl:max-w-full 2xl:bg-zinc-800 2xl:h-full'>
      {
        ceo.map((ceo, i) => (
          <div key={i}>
            <Link to=''><img src={ceo.imgUrl} alt={ceo.title} className='absolute top-3 left-1 w-[98%] h-[100%] mt-[10px] object-cover md:absolute md:top-0 md:left-4 md:w-[96%] md:h-[82vh] md:object-cover md:mt-[20px] lg:absolute lg:mt-[25px] lg:w-[97.5%] lg:h-[77vh] lg:object-cover lg:left-0 lg:top-0 lg:brightness-50 xl:absolute xl:left- xl:w-[95%] xl:h-[85vh] xl:brightness-75 2xl:absolute xl:left- 2xl:w-[87.5%] 2xl:h-[85vh] 2xl:brightness-75' /></Link>
          </div>
          ))
          }
        </div>

        <div className='absolute h-[25vh] top-[78%] flex flex-col ml-[18px] md:absolute md:h[32vh] md:top-[79.6%] md:left-2 lg:absolute lg:left-[49%] lg:top-[17%] lg:w-[45%] xl:absolute xl:top-[19%] xl:left-[50%] 2xl:absolute 2xl:top-[23%] 2xl:left-[54%]'>
          {
            ceo.map((ceo, i) => (
              <div key={i}>
            <h2 className='absolute text-white text-[20px] font-bold font-sans mt-[10px] md:absolute md:text-[23px] lg:absolute lg:top-3 lg:text-[22px] xl:text-white xl:text-[25px]'>{ceo.title}</h2>

            <p className='text-white text-[16px] mt-[55px] font-sans md:mt-[65px] md:text-[16px] md:font-sans lg:absolute lg:w-[86%] lg:text-[17px] lg:leading-relaxed xl:absolute xl:top-2 xl:w-[79%] xl:text-white xl:text-[17px] xl:tracking-tight xl:font-sans 2xl:absolute 2xl:top-0 2xl:w-[64%] 2xl:text-white 2xl:text-[16px] 2xl:tracking-tight 2xl:font-sans'>{ceo.info}</p>

            <div className='absolute w-[31%] md:absolute md:w-[35%] mt-[10px] lg:absolute lg:w-[37.5%] lg:top-[27%] xl:w-[31%] xl:top-30'>
              <Link to=''><h3 className='absolute text-white text-[15px] font-semibold font-sans mt-[15px] border-b-2 border-b-red-600 pb-2 md:absolute md:text-[15px] md:border-b-2 lg:absolute lg:top-24 lg:border-b-2 lg:text-[15px] lg:leading-relaxed lg:font-sans xl:absolute xl:border-b-2 xl:text-white xl:text-[16px]'>{ceo.about}</h3></Link>
            </div>
            </div>
            ))
          }
        </div>
        </main>
    </div>
  )
}
