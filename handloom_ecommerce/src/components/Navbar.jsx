import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible,setvisible]=useState(false);

  const {setShowSearch , getCartCount,navigate,token,setToken,setCartItems}=useContext(ShopContext);

  const logout=()=>{
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  
  }
  
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'>
      <img src= {assets.logo} className='w-36' alt="Logo" /></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1 '>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-4 cursor-pointer' alt="" />
        <div className='group relative'>
            <img onClick={()=>token?null:navigate('/login')} className='w-6 cursor-pointer' src={assets.profile} alt="" />
            {/*Dropdown */}
            {token && 
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col items-center gap-2 w-36 py-3 bg-slate-100 text-gray-500 rounded'> 
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                    <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                </div>
            </div>}
        </div>
        <Link to='/cart' className='relative'>
        <div className="relative inline-block">
        <img src={assets.cart_logo} className="w-4 min-w-5" alt="Cart" />
        <p className="absolute -right-1 -bottom-1 w-4 h-4 text-[10px] flex items-center leading-4 justify-center bg-black text-white rounded-full">{getCartCount()}</p></div>
        </Link>
        <img onClick={()=>setvisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
      </div>
     {/* Sidebar menu for small screens*/}
     <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setvisible(false)} className='flex items-center gap-4 p-3'>
              <img className='h-3 rotate-90' src={assets.dropdown} alt="" />
              <p>Back </p>
            </div>
            <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6' to='/'>HOME</NavLink>
            <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6' to='/collection'>COLLECTION</NavLink>
            <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6' to='/about'>ABOUT</NavLink>
            <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6' to='/contact'>CONTACT</NavLink>
          </div>
        </div>
     </div>

        
  );
};

export default Navbar;
