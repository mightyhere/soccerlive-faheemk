import React from 'react';
import { Player, footballPitch } from '../assets';

function Totw() {
  return (
    <div className=' w-full bg-white shadow-lg rounded-md mt-2 sm:mt-0 justify-center'>
      
      <div className="flex justify-between p-4">
      <h1 className="uppercase font-bold text-[18px]">team of the week</h1>
      <button
          className='py-2 px-4 font-poppins flex font-light text-[14px] text-black bg-[#F6F6F6] rounded-full  '
        >
          <span className=" font-sans-pro b mr-3 font-semibold">Round 35</span>
          <svg width="9" height="6" className='mt-2' viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.56586 0.5H0.43412C0.0493144 0.5 -0.146719 0.971108 0.12918 1.25083L4.19505 5.37302C4.36204 5.54233 4.63794 5.54233 4.805 5.37302L8.87087 1.25083C9.1467 0.971108 8.95066 0.5 8.56586 0.5Z" fill="black"/>
            </svg>
        </button>
      </div>
     <div className='  sm:p-5 sm:mt-4 '>
     <div className='absolute bg-[#BDE1CE] rounded-md w-[22rem] h-[38rem] ' style={{ backgroundImage: `url(${footballPitch})` }}>
       <div className=''>
       <div >
            <img src={Player} alt="" className='mt-4 ml-36' />
        </div>
        <div className='flex justify-between p-4 mt-6'>
        <img src={Player} alt="" />
        <img src={Player} alt="" />
        <img src={Player} alt="" />
        <img src={Player} alt="" />
        </div>
        <div><img src={Player} alt="" className='mt-12 ml-36' /></div>
        <div className='flex justify-between p-4 mt-14'>
        <img src={Player} alt="" />
        <img src={Player} alt="" />
        <img src={Player} alt="" />
        <img src={Player} alt="" />
        </div>
        <div><img src={Player} alt="" className='mt-4 ml-36'/> </div>
       </div>
    </div>
     </div>

      </div>
    
  );
}

export default Totw;
