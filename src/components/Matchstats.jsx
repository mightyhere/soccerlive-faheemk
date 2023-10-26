import React,{useState} from 'react';
import { manCity, manUtd } from '../assets';
import WinPercentageBar from './WinPercentageBar';

const nav = ["Match Details", "Lineups", "Standings"];
const data = [
    {
      title: 'Shots on Goal',
      TeamAPercentage: 8, 
      TeamBPercentage: 6, 
      leftWidth: 60, 
      rightWidth: 40, 
    },
    {
      title: 'Shots off Goal',
      TeamAPercentage:8, 
      TeamBPercentage: 6, 
      leftWidth: 45, 
      rightWidth: 55, 
    },
    {
      title: 'Shots insidebox',
      TeamAPercentage: 8, 
      TeamBPercentage: 6, 
      leftWidth: 45, 
      rightWidth: 55, 
    },
    {
      title: 'Shots outsidebox',
      TeamAPercentage: 8, 
      TeamBPercentage: 6, 
      leftWidth: 45, 
      rightWidth: 55, 
    },
    {
      title: 'Total Shots',
      TeamAPercentage: 8, 
      TeamBPercentage: 6, 
      leftWidth: 45, 
      rightWidth: 55, 
    },
  ];

  function StatisticDiv({ title, TeamAPercentage, TeamBPercentage, leftWidth, rightWidth }) {
    return (
      <div className="flex flex-col py-2 px-6 justify-between items-center h-[3rem]  ">
        <div className="text-[14px] font-bold text-primary">{title}</div>
        <div className="relative grid grid-cols-3 w-[98%] bg-slate-500">
          <div className="absolute bottom-[-4px] left-0 transform -translate-x-1/2 text-[14px] text-primary font-semibold">
            {TeamAPercentage}
          </div>
          <div className="absolute bottom-[-4px] left-full transform -translate-x-1/2 text-[14px] text-primary font-semibold">
            {TeamBPercentage}
          </div>
          <div className="absolute justify-self-center w-[90%] bottom-0 h-3 bg-[#b3b3b3] rounded-full">
            <div
              className="absolute bottom-0 right-1/2 h-3 bg-primary rounded-l-full"
              style={{ width: `${leftWidth / 2}%` }}
            ></div>
            <div
              className="absolute bottom-0 left-1/2 h-3 bg-[#15BE65] rounded-r-full"
              style={{ width: `${rightWidth / 2}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

function Matchstats() {

      const [activeLink, setActiveLink] = useState(nav[0]);
    
      const handleLinkClick = (nav) => {
        setActiveLink(nav);
      };
  return (
    <div className='h-auto mt-2 sm:mt-0 w-full bg-white shadow-md rounded-md'>
      <div className=' h-[10rem] mt-5 w-full  flex justify-between p-4'>
        <div className=' justify-center flex flex-col items-center'>
        <img className=" h-[3.5rem]" src={manCity} alt="Man United" />
          <span className="text-lg mt-2 font-semibold text-primary ">
            Man City
          </span>
        </div>
        <div className="justify-center mt-4 ">
          <div className=" flex flex-row gap-1 text-primary font-sans text-[40px] font-bold">
            <span>1</span>
            <h2>-</h2>
            <span>0</span>
          </div>
          <h3 className="text-center font-semibold text-[#949292]">FT</h3>
        </div>
        <div className=' justify-center flex flex-col items-center '>
        <img className=" h-[3.5rem]" src={manUtd} alt="Man United" />
          <span className="text-lg mt-2 font-semibold text-primary ">
            Man utd
          </span>
        </div>
      </div>
      <div className=" text-[18px] font-bold text-primary">
        Winning Percentage?
      </div>
      <div className="w-full px-3 mt-4">
        <WinPercentageBar leftPercentage={56} rightPercentage={26} />
      </div>
      <div className="mt-8 w-full p-4  ">
        <div className="flex  justify-between w-full shadow-md ">
          {nav.map((navItem, index) => (
            <div
              key={index}
              className={`cursor-pointer py-3 text-[15px] text-center transform transition-transform  ${
                activeLink === navItem ? `font-bold  border-b-2 border-primary` : ""
              }`}
              onClick={() => handleLinkClick(navItem)}
            >
              {navItem}
            </div>
          ))}
        </div>
       
    </div>
    <div className='p-4 justify-center'>
        <h1 className='text-left font-bold text-primary'>Statistics</h1>
        <div className='flex justify-between bg-[#F6F6F6] p-4 font-semibold text-secondary rounded-md mt-3 text-[14px]'>
            <div className='flex gap-2 '>
                <img src={manCity} alt="" className='h-10' />
                <h1 className='mt-2'>Man City</h1>
            </div>
            <div className='flex gap-2'>
            <h1 className='mt-2'>Man Utd</h1>
                <img src={manUtd} alt="" className='h-10' />
                
            </div>
        </div>
    </div>
    <div >
      {data.map((item, index) => (
        <StatisticDiv 
          key={index}
          title={item.title}
          TeamAPercentage={item.TeamAPercentage}
          TeamBPercentage={item.TeamBPercentage}
          leftWidth={item.leftWidth}
          rightWidth={item.rightWidth}
        />
      ))}
    </div>
    </div>
  );
}


export default Matchstats;
