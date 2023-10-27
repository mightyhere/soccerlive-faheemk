import React,{useState} from 'react';
import { manCity, } from '../assets';

const nav = ["Summary", "Attack", "Defense", "Passing", "Goal Keeper", "Detailed"];
const standingsData = [
  {
    rank: 1,
    img: manCity,
    name: "Kevin De Bruyune",
    goals: 21,
    drribles: 12,
    tackles: 11,
    assists: 18,
    passes: 67.1,
    rating: 9.1,
  },
  {
    rank: 2,
    img: manCity,
    name: "Kevin De Bruyune",
    goals: 21,
    drribles: 12,
    tackles: 11,
    assists: 18,
    passes: 67.1,
    rating: 9.1,
  },
  {
    rank: 3,
    img: manCity,
    name: "Kevin De Bruyune",
    goals: 21,
    drribles: 12,
    tackles: 11,
    assists: 18,
    passes: 67.1,
    rating: 9.1,
  },
  {
    rank: 4,
    img: manCity,
    name: "Kevin De Bruyune",
    goals: 21,
    drribles: 12,
    tackles: 11,
    assists: 18,
    passes: 67.1,
    rating: 9.1,
  },
  {
    rank: 5,
    img: manCity,
    name: "Kevin De Bruyune",
    goals: 21,
    drribles: 12,
    tackles: 11,
    assists: 18,
    passes: 67.1,
    rating: 9.1,
  },
  {
    rank: 6,
    img: manCity,
    name: "Kevin De Bruyune",
    goals: 21,
    drribles: 12,
    tackles: 11,
    assists: 18,
    passes: 67.1,
    rating: 9.1,
  },
  {
    rank: 7,
    img: manCity,
    name: "Kevin De Bruyune",
    goals: 21,
    drribles: 12,
    tackles: 11,
    assists: 18,
    passes: 67.1,
    rating: 9.1,
  },
  {
    rank: 8,
    img: manCity,
    name: "Kevin De Bruyune",
    goals: 21,
    drribles: 12,
    tackles: 11,
    assists: 18,
    passes: 67.1,
    rating: 9.1,
  },
  {
    rank: 9,
    img: manCity,
    name: "Kevin De Bruyune",
    goals: 21,
    drribles: 12,
    tackles: 11,
    assists: 18,
    passes: 67.1,
    rating: 9.1,
  },
  {
    rank: 10,
    img: manCity,
    name: "Kevin De Bruyune",
    goals: 21,
    drribles: 12,
    tackles: 11,
    assists: 18,
    passes: 67.1,
    rating: 9.1,
  },
  {
    rank: 11,
    img: manCity,
    name: "Kevin De Bruyune",
    goals: 21,
    drribles: 12,
    tackles: 11,
    assists: 18,
    passes: 67.1,
    rating: 9.1,
  },
 
];


function PlayerStats() {

  
    const [activeLink, setActiveLink] = useState(nav[0]);
  
    const handleLinkClick = (nav) => {
      setActiveLink(nav);
    };

  return (
    <div className='sm:w-2/3 hidden sm:block rounded-md bg-white shadow-md mt-4 sm:mt-0'>
          <div className="flex flex-row justify-between p-6">
        <h2 className="font-semibold text-[22px] text-indigo-950">Player Statistics</h2>
        <div className="flex flex-row justify-between items-center gap-2">
          <h3 className=" text-[#87848a] text-[14px] items-center font-bold">Accumulation</h3>
          <button className="py-2 px-4 flex  text-[14px] text-primary bg-[#f6f6f6] hover:bg-[#dddd] rounded-full">
            <span className=" mr-3 font-bold">All</span>
            <svg width="9" height="6" className='mt-2' viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.56586 0.5H0.43412C0.0493144 0.5 -0.146719 0.971108 0.12918 1.25083L4.19505 5.37302C4.36204 5.54233 4.63794 5.54233 4.805 5.37302L8.87087 1.25083C9.1467 0.971108 8.95066 0.5 8.56586 0.5Z" fill="black"/>
            </svg>
          </button>
        </div>
      </div>
      <div>
      <div className=" w-full flex max-w-[650px] flex-col items-center">
      <div className="flex px-6 sm:flex-row justify-between w-full shadow-md font-bold ">
        {nav.map((navItem, index) => (
          <div
            key={index}
            className={`cursor-pointer p-4 text-[14px] text-center transform transition-transform ${
              activeLink === navItem ? "font-bold border-primary border-b-2 " : ""
            }`}
            onClick={() => handleLinkClick(navItem)}
          >
            {navItem}
          </div>
        ))}
      </div>
  
      </div>
      
      </div>
      <div className="w-full top-[10rem] h-[25rem] px-4 mt-4 scroll-container font-bold">
        <table className="relative w-full  flex-col">
          <thead className=" w-full ">
            <tr className="text-[14px]  font-normal bg-white  text-[#767379]">
              <th className="p-2 text-left">#</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-center">Goals</th>
              <th className="p-2 text-center">Succ. drribles</th>
              <th className="p-2 text-center">Tackles</th>
              <th className="p-2 text-center">Assists</th>
              <th className="p-2 text-center">Acc. Passes%</th>
              <th className="p-2 text-center">Rating</th>
            </tr>
          </thead>
          <tbody>
  {standingsData.map((data, index) => (
    <tr key={index} className='space-y-2'>
      <td className="p-2">{data.rank}</td>
      <td className="p-2 text-left flex">
        <img src={data.img} className="h-6 w-6 mx-2" alt="" /> {data.name}
      </td>
      <td className="p-2 text-center">{data.goals}</td>
      <td className="p-2 text-center">{data.drribles}</td>
      <td className="p-2 text-center">{data.tackles}</td>
      <td className="p-2 text-center">{data.assists}</td>
      <td className="p-2 text-center">{data.passes}</td>
      <td className="p-2 text-center">
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 w-10 h-8 rounded-lg items-cen">
                <p className="text-white text-center">{data.rating}</p>
              </div>
      </td>
    </tr>
  ))}
</tbody>

        </table>

      </div>
    </div>
  );
}

export default PlayerStats;
