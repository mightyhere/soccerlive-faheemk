import React,{useState} from 'react';

const nav = [
  'Football',
  'Tennis',
  'Baseball',
  'Hockey',
  'Handball',
  'Cricket',
  'Volleyball',
  
];

function Header() {
  const [activeLink, setActiveLink] = useState(nav[0]);
  
  const handleLinkClick = (nav) => {
    setActiveLink(nav);
  };
  return (
    <div className='bg-white w-full h-[5rem] shadow-lg '>
      <div className='flex gap-10 justify-center items-center py-3'>
        <div className='flex items-center overflow-x-auto sm:gap-10 '>
          {nav.map((nav, index) => (
            <li
              className={`list-none  text-neutral-700 p-[20px] cursor-pointer text-[18px]  ${
                activeLink === nav ? "font-bold border-primary border-b-2 " : ""
              }`}
              key={index} onClick={() => handleLinkClick(nav)}
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
