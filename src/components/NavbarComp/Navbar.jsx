import React from 'react'
import {AiFillTag, AiOutlineCloseCircle, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai';
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import './nav.css'
import { useState } from 'react';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  console.log(openNav);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-[0_10px_30px_-28px_rgba(0,0,0,0.3)]' >
      <div className='flex items-center'>
        <div className='cursor-pointer' onClick={()=> {setOpenNav(!openNav)}}>
          <AiOutlineMenu size={30}/>
        </div>
        <h3 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Eats</span>
        </h3>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      {/* search input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20}/>
        <input type="text" placeholder='search foods' className='bg-transparent p-2 w-full focus:outline-none'/>
      </div>
      {/* cart button */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2'/> Cart
      </button>
      {/* mobile menu */}
      {/* overlay */}
      {
        openNav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ""
      }
        {/* drawwer */}
        <div className={openNav ? 'fixed top-0 left-0 w-[250px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[250px] h-screen bg-white z-10 duration-300'}>
          <AiOutlineCloseCircle className='absolute right-4 top-4 cursor-pointer' size={30} onClick={()=> {setOpenNav(!openNav)}}/>
          <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
          <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
              <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
              <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4'/>Favorites</li>
              <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4'/>Wallet</li>
              <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4'/>Help</li>
              <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4'/>Promotions</li>
              <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4'/>Best One</li>
              <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
            </ul>
          </nav>
        </div>

     
    </div>
  )
}

export default Navbar
