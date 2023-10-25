import React from 'react';
import { Homeicon } from '../assets';

function Filepath() {
  return (
    <div className='px-4 py-4  sm:px-28'>
        <div className='flex bg-white w-full  shadow-md p-4 h-[3rem] font-semibold' >
        <img src={Homeicon} alt="" className='p-' />
        <span className="text-[#372546] ml-2 text-[14px]">&gt;</span>
        <h1 className='ml-2'>England</h1>
        <span className="text-[#372546] ml-2 text-[14px]">&gt;</span>
        <h1 className='ml-2 text-[#8B8B8B]'>Premier League</h1>
        </div>
      </div>
   
  );
}

export default Filepath;
