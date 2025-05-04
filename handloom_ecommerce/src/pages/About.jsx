import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 '>
        <Title text1={'ABOUT'} text2={' US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[350px]' src={assets.about} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-60'>
          <p>At forever, we bring you handpicked, handcrafted fashion and lifestyle products that blend tradition with modern elegance. From sarees and kurtas to jewelry and home decor, every piece is made with care and tells a story.</p>
          <p>Thank you for supporting small artisans and choosing mindful shopping.</p>
          <b className='text-gray-800 '>Our Mission</b>
          <p>To empower artisans, celebrate craftsmanship, and deliver authentic, high-quality products that connect culture with contemporary style.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600' >We are committed to offering only the finest products, carefully crafted and thoroughly inspected to ensure durability, authenticity, and customer satisfaction.</p>
        </div>
        <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We provide a seamless shopping experience with easy navigation, secure payments, and doorstep delivery—making traditional and handcrafted products just a click away. </p>
        </div>
        <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our dedicated support team is here to assist you at every step, ensuring your satisfaction with timely responses, personalized help, and a hassle-free shopping journey.</p>
        </div>
      </div>
      
      <NewsletterBox/>
      
    </div>
  )
}

export default About
