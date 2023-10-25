import React from 'react';

const Navitems = [
  'Football',
  'Tennis',
  'Baseball',
  'Hockey',
  'Handball',
  'Cricket',
  'Volleyball',
  
];

function Header() {
  return (
    <div className='bg-white w-full h-[5rem] shadow-lg '>
      <div className='flex gap-10 justify-center items-center py-3'>
        <div className='flex items-center overflow-x-auto sm:gap-10 '>
          {Navitems.map((nav, index) => (
            <li
              className='list-none  text-neutral-700 p-[20px] cursor-pointer text-[18px]  hover:font-bold hover:border-b-2 hover:border-[#161B46]'
              key={index}
            >
              {nav}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
