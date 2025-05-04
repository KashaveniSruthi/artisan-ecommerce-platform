import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-small'>
        <div>
            <img src={assets.logo}  className='mb-5 w-32' alt="" />
            <p className='w-10 md:w-2/3 text-gray-600'>Handcrafted elegance – from sarees to jewelry, discover timeless tradition blended with modern charm.</p>
        </div>
        <div>
            <p className='text-lg font-medium mb-6'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-lg font-medium mb-6'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600' >
                <li>+91-9123456789</li>
                <li>contact@forever.com</li>

            </ul>
        </div>
        
        </div>
        <div>
            <hr/>
            <p className=' py-10 text-sm text-center'>Copyright 2025@ Forever.com — All Rights Reserved </p>
        </div>
    </div>
  )
}

export default Footer
