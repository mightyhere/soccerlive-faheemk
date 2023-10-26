import React from 'react';
import { manCity, manUtd } from '../assets';

function Matches() {
  return (
    <div className='] w-full bg-primary shadow-2xl rounded-md'>
      <h1 className='text-white text-left p-4'>Matches</h1>
      <div className='flex justify-between sm:p-4 p-2 gap-1 sm:gap-1 text-[14px]'>
        <div className='bg-secondary w-28   rounded-full cursor-pointer text-neutral-300'>
            <div className='flex p-2 items-center justify-center gap-2'>
            <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 9.06586L5 0.93412C5 0.549314 4.52889 0.353281 4.24917 0.62918L0.126978 4.69505C-0.0423262 4.86204 -0.0423262 5.13794 0.126978 5.305L4.24917 9.37087C4.52889 9.6467 5 9.45066 5 9.06586Z" fill="white"/>
            </svg>
            <h1 className=''>Previous</h1>
            </div>
        </div>
        <div className='bg-secondary w-28   rounded-full text-neutral-300 cursor-pointer'>
        <div className='flex p-2 items-center justify-center gap-2'>
            <h1 className=''>Round 35</h1>
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.56586 0.5H0.43412C0.0493144 0.5 -0.146719 0.971108 0.12918 1.25083L4.19505 5.37302C4.36204 5.54233 4.63794 5.54233 4.805 5.37302L8.87087 1.25083C9.1467 0.971108 8.95066 0.5 8.56586 0.5Z" fill="white"/>
            </svg>
            </div>
        </div>
        <div className='bg-secondary w-28   rounded-full text-neutral-300 cursor-pointer'>
        <div className='flex p-2 items-center justify-center gap-2'>
            <h1 className=''>Next</h1>
            <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-3.74426e-07 0.934142L-1.8976e-08 9.06588C-2.1556e-09 9.45069 0.471108 9.64672 0.750828 9.37082L4.87302 5.30495C5.04233 5.13796 5.04233 4.86206 4.87302 4.695L0.750828 0.629129C0.471107 0.353304 -3.91246e-07 0.549336 -3.74426e-07 0.934142Z" fill="white"/>
            </svg>
            </div>
        </div>
      </div>
      <div className='bg-secondary  w-full h-[4rem] mt-4 shadow-md text-left p-4 px-6 text-neutral-300 font-semibold'>
        <p>14/07/2021 </p>
      </div>
      <div className='p-4'>
            <div className='bg-white w-full  rounded-md shadow-md '>
                    <div className='flex justify-center py-3 mt-2 gap-5'>
                            <img src={manCity} alt="" />
                            <div className='flex text-primary text-[28px] font-bold gap-2'>
                            <h1 className=''>3</h1>
                            <h2 className='text-neutral-500 text-[16px] mt-2'>FT</h2>
                            <h1>1</h1>
                            </div>
                            <img src={manUtd} alt="" />
                    </div>
                    <div className='flex justify-center text-[#3E3744] font-semibold gap-1'>
                            <h1>Wolverhaptom</h1>
                            <p className='text-neutral-400'>v</p>
                            <h1>Manchester United</h1>
                    </div>
            </div>
            <div className='bg-white w-full  rounded-md shadow-md mt-2'>
                    <div className='flex justify-center py-3 gap-5'>
                            <img src={manCity} alt="" />
                            <div className='flex text-primary text-[28px] font-bold gap-2'>
                            <h1 className=''>3</h1>
                            <h2 className='text-neutral-500 text-[16px] mt-2'>FT</h2>
                            <h1>1</h1>
                            </div>
                            <img src={manUtd} alt="" />
                    </div>
                    <div className='flex justify-center text-[#3E3744] font-semibold gap-1'>
                            <h1>Wolverhaptom</h1>
                            <p className='text-neutral-400'>v</p>
                            <h1>Manchester United</h1>
                    </div>
            </div>
            <div className='bg-white w-full  rounded-md shadow-md mt-2'>
                    <div className='flex justify-center py-3 gap-5'>
                            <img src={manCity} alt="" />
                            <div className='flex text-primary text-[28px] font-bold gap-2'>
                            <h1 className=''>3</h1>
                            <h2 className='text-neutral-500 text-[16px] mt-2'>FT</h2>
                            <h1>1</h1>
                            </div>
                            <img src={manUtd} alt="" />
                    </div>
                    <div className='flex justify-center text-[#3E3744] font-semibold gap-1'>
                            <h1>Wolverhaptom</h1>
                            <p className='text-neutral-400'>v</p>
                            <h1>Manchester United</h1>
                    </div>
            </div>
            
      </div>
      <div className='bg-secondary  w-full h-[4rem] mt-4 shadow-md text-left p-4 px-6 text-neutral-300 font-semibold'>
        <p>14/07/2021 </p>
      </div>
      <div className='p-4'>
            <div className='bg-white w-full  rounded-md shadow-md '>
                    <div className='flex justify-center py-3 mt-2 gap-5'>
                            <img src={manCity} alt="" />
                            <div className='flex text-primary text-[28px] font-bold gap-2'>
                            <h1 className=''>3</h1>
                            <h2 className='text-neutral-500 text-[16px] mt-2'>FT</h2>
                            <h1>1</h1>
                            </div>
                            <img src={manUtd} alt="" />
                    </div>
                    <div className='flex justify-center text-[#3E3744] font-semibold gap-1'>
                            <h1>Wolverhaptom</h1>
                            <p className='text-neutral-400'>v</p>
                            <h1>Manchester United</h1>
                    </div>
            </div>
            <div className='bg-white w-full  rounded-md shadow-md mt-2'>
                    <div className='flex justify-center py-3 gap-5'>
                            <img src={manCity} alt="" />
                            <div className='flex text-primary text-[28px] font-bold gap-2'>
                            <h1 className=''>3</h1>
                            <h2 className='text-neutral-500 text-[16px] mt-2'>FT</h2>
                            <h1>1</h1>
                            </div>
                            <img src={manUtd} alt="" />
                    </div>
                    <div className='flex justify-center text-[#3E3744] font-semibold gap-1'>
                            <h1>Wolverhaptom</h1>
                            <p className='text-neutral-400'>v</p>
                            <h1>Manchester United</h1>
                    </div>
            </div>
           
            
      </div>

    </div>
  );
}

export default Matches;
