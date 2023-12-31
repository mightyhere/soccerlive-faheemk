import React from 'react';
import { bellicon, logo } from '../assets';

function Navbar() {
  return (
    <div className='bg-primary  h-[5rem] sm:h-[4rem]  flex justify-between   '>
        <div className='flex items-center  '>
            <img   src={logo} alt="" className='w-8 h-8 mx-4' />
            <span className='text-white font-semibold text-[22px] '>Soccerlive</span>
        </div>
        <div className=' mt-4 hidden sm:block'>
            <div className=' relative bg-secondary  w-[24rem] h-[2rem] rounded-md bg-opacity-80 '>
                <div className='flex'>
                    <button className='absolute left-0 mt-2 ml-2'>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6959 19.1277L14.7656 13.9295C16.0332 12.4018 16.7278 10.4797 16.7278 8.47874C16.7278 3.80364 12.9757 0 8.36391 0C3.75212 0 0 3.80364 0 8.47874C0 13.1538 3.75212 16.9575 8.36391 16.9575C10.0952 16.9575 11.7451 16.4281 13.1557 15.4232L18.1235 20.6609C18.3311 20.8795 18.6104 21 18.9097 21C19.193 21 19.4617 20.8905 19.6657 20.6914C20.0992 20.2686 20.113 19.5675 19.6959 19.1277ZM8.36391 2.21185C11.7727 2.21185 14.5459 5.0231 14.5459 8.47874C14.5459 11.9344 11.7727 14.7456 8.36391 14.7456C4.95507 14.7456 2.18189 11.9344 2.18189 8.47874C2.18189 5.0231 4.95507 2.21185 8.36391 2.21185Z" fill="#F3F3F3"/>
                    </svg>
                    </button>
                    <input type="text" className='bg-secondary h-8 w-full ml-8 text-white outline-none' placeholder='search' />
                </div>
            </div>
        </div>
        <div className=' bg-secondary  w-[10rem] text-center h-[3rem] mr-12 rounded-full mt-2 cursor-pointer hidden  sm:flex  '>
        <img src={bellicon} alt="" className='h-8 mt-2 ml-3' />
        <p className='font-semibold text-white mt-2'>Notifications</p>

        </div>
        <div className='bg-secondary w-[4rem] h-[3rem] mr-4 rounded-md mt-4  cursor-pointer  sm:hidden'>
            <button className='mt-2'>
            <svg width="26" height="26" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6959 19.1277L14.7656 13.9295C16.0332 12.4018 16.7278 10.4797 16.7278 8.47874C16.7278 3.80364 12.9757 0 8.36391 0C3.75212 0 0 3.80364 0 8.47874C0 13.1538 3.75212 16.9575 8.36391 16.9575C10.0952 16.9575 11.7451 16.4281 13.1557 15.4232L18.1235 20.6609C18.3311 20.8795 18.6104 21 18.9097 21C19.193 21 19.4617 20.8905 19.6657 20.6914C20.0992 20.2686 20.113 19.5675 19.6959 19.1277ZM8.36391 2.21185C11.7727 2.21185 14.5459 5.0231 14.5459 8.47874C14.5459 11.9344 11.7727 14.7456 8.36391 14.7456C4.95507 14.7456 2.18189 11.9344 2.18189 8.47874C2.18189 5.0231 4.95507 2.21185 8.36391 2.21185Z" fill="#F3F3F3"/>
                    </svg>
            </button>
        </div>
    </div>
  );
}

export default Navbar;
