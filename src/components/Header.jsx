import React from 'react';

const Navitems = [
   'football',
   'tennis',
   'baseball',
   'hockey',
   'handball',
   'cricket',
    'volleyball',
    'table tennis'
]

function Header() {
  return (
    <div className='bg-white w-full h-[4rem] shadow-lg '>
      <div className='flex gap-10 justify-center items-center py-3'>
        {Navitems.map((nav,index)=>(
            <li className='list-none text-neutral-700 p-3 cursor-pointer hover:font-bold hover:border-b-2 hover:border-[#161B46]  ' key={index}>{nav}</li>
        ))}
      </div>
    </div>
  );
}

export default Header;
