import React from 'react';
import { manCity,manUtd } from '../assets';

function LeagueCard() {
  return (
    <div className=' flex w-full h-[16rem] justify-center'>
      <div className=' bg-white  shadow-lg h-[14rem] w-[46rem] ml-28 rounded-md'>
           
      </div>
      <div className='bg-primary rounded-md h-[14rem] w-[26rem] ml-4'>
        <h1 className='text-left text-white text-[20px] ml-2 '> Featured event</h1>
        <div className=' bg-white w-[24rem] h-[10rem] rounded-lg ml-4 mt-3'>
        <div className='text-center text-black '>
                <p className='py-4'>April 05, 2021</p>
                <div>
                <img className='h-4 w-4' src={manCity} alt="" />
                <p>test</p>
                <img src={manUtd} alt="" />
            </div>
            </div>
            
        </div>
            
      </div>
    </div>
  );
}

export default LeagueCard;
