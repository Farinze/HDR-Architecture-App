import React from 'react'
import { Link } from "react-router-dom"
import { cult } from "../Components/Logolist"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function OurCulture() {
  return (
    <div className='bg-inherit max-w-screen h-[135vh] md:bg-inherit md:max-w-screen md:h-[140vh] lg:max-w-screen lg:h-[140vh] xl:max-w-screen xl:h-[140vh]'>
      <section className='relative flex flex-col bg-zinc-800 w-screen h-[110vh] md:relative md:flex  md:flex-col md:w-screen md:h-[115vh] lg:w-screen lg:h-[88vh] xl:relative xl:w-screen xl:[97vh]'>

        <div className='absolute w-[98%] h-[85vh] top-[4%] md:absolute md:top-[3%] md:w-[98.5%] md:h-[78vh] lg:absolute lg:h-[89vh] lg:left-0 xl:absolute xl:left-12 xl:w-[97%] xl:h-[85vh] 2xl:absolute 2xl:left-16 2xl:w-[95%] 2xl:h-[85vh]'>
      {
        cult.map((cult, i) => (
          <div key={i}>
            <Link to=''><img src={cult.imgUrl} alt={cult.title} className='absolute top-0 right-5 w-[97%] h-[75vh] mt-[35px] object-cover md:absolute md:top-0 md:left-4 md:w-[95.7%] md:h-[78vh] md:object-cover lg:absolute lg:w-[99%] lg:h-[79vh] lg:object-cover lg:left-9 lg:top-3 lg:brightness-75 xl:absolute xl:right-0 xl:w-[98%] xl:h-[77vh] xl:top-[4%] xl:brightness-50 xl:object-cover 2xl:absolute 2xl:left-[9%] 2xl:w-[93%] 2xl:h-[77vh] 2xl:top-[4%] 2xl:brightness-50 2xl:object-cover' /></Link>
          </div>
          ))
          }
        </div>

        <div className='absolute h-[35vh] top-[78%] flex flex-col ml-[20px] md:absolute md:ml-[23px] md:top-[76.9%] md:h-[28vh] lg:absolute lg:left-[6.5%] lg:top-[21%] lg:w-[45%] xl:absolute xl:top-[25%] xl:left-[8%]
        2xl:absolute 2xl:top-[25%] 2xl:left-[17%]'>
          {
            cult.map((cult, i) => (
              <div key={i}>
            <h2 className='absolute text-white text-[23px] font-bold font-sans mt-[15px] md:absolute md:text-[25px] lg:text-[22px] xl:text-white'>{cult.title}</h2>

            <p className='text-white text-[16px] mt-[60px] w-[96%] font-sans md:mt-[65px] md:text-[16px] md:font-sans lg:absolute lg:w-[89%] lg:text-[17px] lg:leading-relaxed lg:top-0 xl:absolute xl:top-[-1%] xl:w-[73%] xl:text-white xl:text-[16px] xl:tracking-tight xl:font-sans'>{cult.info}</p>

            <div className='absolute w-[31%] md:w-[30.5%] lg:absolute lg:w-[37.5%] lg:top-[60%] xl:w-[31%] xl:top-[50%]'>
              <Link to=''><h3 className='absolute text-white text-[15px] font-semibold font-sans mt-[20px] border-b-2 border-b-red-600 tracking-widest pb-2 md:absolute md:text-[15px] md:border-b-2 md:tracking-widest md:pb-3 lg:absolute lg:top-5 lg:border-b-2 lg:text-[17px] lg:tracking-wide lg:font-sans xl:absolute xl:border-b-2 xl:text-white'>{cult.about}</h3></Link>
            </div>
            </div>
            ))
          }
        </div>
        </section>

        <section className='bg-gray-200 flex flex-col max-w-full h-[78.5vh] md:h-[75.5vh] lg:[50vh] xl:[40vh]'>
        <main className='flex flex-col mt-[35px] max-w-full h-[69vh] md:flex md:flex-col md:max-w-full md:h-[65vh] lg:flex lg:flex-row lg:max-w-full lg:h-[40vh] lg:mt-[35px] xl:gap-10 xl:h-[38vh] 2xl:ml-[130px]'>
        <div className='h-[190px] md:h-[180px] lg:ml-[30px] xl:ml-[60px]'>
          <div className='flex flex-col ml-[30px] md:max-w-full h-[90px] md:ml-[30px] md:flex md:flex-col max-w-full md:h-[70px] lg:ml-[30px] lg:max-w-[300px] lg:flex lg:flex-col 2xl:[450px]'>
              <h2 className='text-[14px] font-black tracking-tighter font-sans md:text-[13px] md:font-extrabold md:tracking-tighter md:font-sans lg:text-[16px] lg:font-extrabold lg:font-sans 2xl:text-[14px] 2xl:font-bold'>GET IN TOUCH</h2>
              <p className='w-[95%] tracking-wide mt-[15px] text-[15px] font-semibold leading-loose font-sans lg:tracking-wide 2xl:max-w-[390px] 2xl:tracking-tight'>Ready to learn more? Let's work together to make great things possible. <Link className='text-red-600'>Contact Us ➜</Link></p>
          </div>

          <div className='flex flex-col max-w-full h-[100px] mt-[35px] ml-[30px] md:flex md:flex-col md:max-w-full md:h-[100px] md:mt-[20px] md:ml-[30px] lg:mt-[75px]'>
          <h2 className='text-[14px] font-black tracking-tighter font-sans md:text-[13px] md:font-extrabold md:tracking-tighter md:font-sans lg:text-[15px] lg:font-bold 2xl:font-bold 2xl:text-[14px]'>BUSINESS STATEMENTS</h2>
          <Link><p className='text-red-600 text-[14px] font-semibold mt-[17px] md:text-red-600 md:text-[14px] md:font-bold md:mt-[17px] md:font-sans lg:text-[15px]'>All Business Statements ➜</p></Link>
          </div>

        </div>

          <div className='flex flex-col max-w-full h-[105px] mt-[45px] ml-[30px] md:flex md:flex-col md:max-w-full md:h-[90px] md:mt-[25px] md:ml-[30px] lg:mt-[1px] lg:max-w-[278px] 2xl:max-w-[380px]'>
          <h2 className='text-[14px] font-black tracking-tighter font-sans md:text-[13px] md:font-extrabold md:tracking-wide md:font-sans 2xl:font-bold 2xl:text-[14px]'>CAREERS</h2>
          <p className='w-[93%] tracking-tight mt-[15px] text-[15px] font-semibold font-sans leading-loose md:w-[95%] md:tracking-wide md:mt-[15px] md:text-[15px] md:font-semibold md:font-sans md:leading-loose lg:text-[15px] 2xl:max-w-[98%]'>We design solutions to the world's greatest challenges. We're always looking for great talent to join our global teams. <Link className='text-red-600'>Current Openings.</Link></p>
          </div>

          <div className='flex flex-col max-w-full h-[88px] mt-[30px] ml-[30px] md:flex md:flex-col md:max-w-full md:h-[100px] md:mt-[45px] md:ml-[30px] lg:mt-[1px] lg:max-w-[300px]'>
            <h2 className='text-[14px] font-black tracking-tighter font-sans md:text-[13px] md:font-extrabold md:tracking-tighter md:font-sans 2xl:font-bold 2xl:text-[14px]'>SOCIAL MEDIA</h2>

            <div className='flex justify-between w-[30%] mt-[15px] text-[28px] font-black opacity-80 font-sans md:flex md:justify-between md:w-[30%] md:mt-[15px] md:text-[28px] md:font-black md:opacity-80 md:font-sans lg:flex lg:gap-10'>
              <Link><FaFacebookF /></Link>
              <Link><FaLinkedinIn /></Link>
              <Link><FaInstagram /></Link>
              <Link><FaYoutube /></Link>
            </div>
          </div>
          
        </main>

        <div className='flex gap-4 max-w-[60%] h-[20px] ml-[15px] text-[14px] font-semibold font-sans tracking-tight md:flex md:gap-4 md:max-w-[60%] md:ml-[15px] md:font-semibold md:font-sans md:tracking-wide lg:ml-[50px] xl:ml-[80px] xl:text-[13px] xl:tracking-tighter 2xl:ml-[210px]'>
            <p>© 2024 HDR, Inc., all rights reserved</p>
            <Link><p className='underline'>Terms of Use | Privacy</p></Link>
          </div>
        </section>
    </div>
  )
}
