import React from 'react';
    import { manCity,manUtd,w,l } from '../assets';
   

const standingsData = [
    {
      rank: 1,
      img: manCity,
      team: "Manchester City",
      played: 21,
      won: 21,
      drawn: 21,
      lost: 21,
      goals: 21,
      lastfive:[w,w,l,l,w],
      points: 62,
    },
    {
      rank: 2,
      img: manUtd,
      team: "Manchester united",
      played: 21,
      won: 21,
      drawn: 21,
      lost: 21,
      goals: 21,
      lastfive:[w,w,l,l,w],
      points: 62,
    },
    {
      rank: 3,
      img: manCity,
      team: "Manchester City",
      played: 21,
      won: 21,
      drawn: 21,
      lost: 21,
      goals: 21,
      lastfive:[w,w,l,l,w],
      points: 62,
    },
    {
        rank: 4,
        img: manCity,
        team: "Manchester City",
        played: 21,
        won: 21,
        drawn: 21,
        lost: 21,
        goals: 21,
        lastfive:[w,w,l,l,w],
        points: 62,
      },
      {
        rank: 5,
        img: manCity,
        team: "Manchester City",
        played: 21,
        won: 21,
        drawn: 21,
        lost: 21,
        goals: 21,
        lastfive:[w,w,l,l,w],
        points: 62,
      },
      {
        rank: 6,
        img: manCity,
        team: "Manchester City",
        played: 21,
        won: 21,
        drawn: 21,
        lost: 21,
        goals: 21,
        lastfive:[w,w,l,l,w],
        points: 62,
      },
      {
        rank: 7,
        img: manCity,
        team: "Manchester City",
        played: 21,
        won: 21,
        drawn: 21,
        lost: 21,
        goals: 21,
        lastfive:[w,w,l,l,w],
        points: 62,
      },
      {
        rank: 8,
        img: manCity,
        team: "Manchester City",
        played: 21,
        won: 21,
        drawn: 21,
        lost: 21,
        goals: 21,
        lastfive:[w,w,l,l,w],
        points: 62,
      },
      {
        rank: 9,
        img: manCity,
        team: "Manchester City",
        played: 21,
        won: 21,
        drawn: 21,
        lost: 21,
        goals: 21,
        lastfive:[w,w,l,l,w],
        points: 62,
      },
      {
        rank: 10,
        img: manCity,
        team: "Manchester City",
        played: 21,
        won: 21,
        drawn: 21,
        lost: 21,
        goals: 21,
        lastfive:[w,w,l,l,w],
        points: 62,
      },
      {
        rank: 11,
        img: manCity,
        team: "Manchester City",
        played: 21,
        won: 21,
        drawn: 21,
        lost: 21,
        goals: 21,
        lastfive:[w,w,l,l,w],
        points: 62,
      },
    
  ];

function Standings() {
  return (
    <div className=' w-full h-auto px-4 sm:px-28'>
      <div className=' bg-white shadow-xl mt-12 rounded-md '>
            <div className=' sm:flex w-full h-auto justify-between p-4'>
            <h2 className='text-[20px] text-primary text-left font-semibold'>Standings</h2>
                <div className='space-x-10 text-md shadow-sm mt-4 sm:mt-0 rounded-md py-5 sm:p-2 sm:w-[23rem] justify-between'>
                    <a href="/" className=' border-primary  hover:border-b-[2px] px-4 py-[21px] sm:py-0'>Overall</a>
                    <a href="/" className=' border-primary  hover:border-b-[2px] px-4 py-[21px] sm:py-0'>Home</a>
                    <a href="/" className=' border-primary  hover:border-b-[2px] px-4 py-[21px] sm:py-0'>Away</a>
                </div>
            </div>
            
             <div className=''>
                <table className=' w-full  '>
                    <thead className=''>
                    <tr className='"text-[12px]  bg-white  text-neutral-400'>
                    <th className="p-2 text-center">#</th>
              <th className="p-2 text-left">Team</th>
              <th className="p-2 text-center hidden sm:table-cell">Played</th>
              <th className="p-2 text-center sm:hidden">P</th>
              <th className="p-2 text-center hidden sm:table-cell">Won</th>
              <th className="p-2 text-center sm:hidden">W</th>
              <th className="p-2 text-center hidden sm:table-cell">Drawn</th>
              <th className="p-2 text-center sm:hidden">D</th>
              <th className="p-2 text-center hidden sm:table-cell">Lost</th>
              <th className="p-2 text-center sm:hidden">L</th>
              <th className="p-2 text-center hidden sm:table-cell">Goals</th>
              <th className="p-2 text-center hidden sm:table-cell">Last 5</th>
              <th className="p-2 text-center hidden sm:table-cell">Points</th>
              <th className="p-2 text-center sm:hidden">Pts</th>
                    </tr>
                    </thead>
                    <tbody className='font-semibold text-[12px] sm:text-[18px]'>
                    {standingsData.map((data, index) => (
  <tr key={index} >
    <td className="p-2">{data.rank}</td>
    <td className="p-2 text-left flex">
      <img src={data.img} className="h-8 w-8 mx-2 hidden sm:block" alt="" />
      {data.team}
    </td>
    <td className=" text-center">{data.played}</td>
    <td className=" text-center">{data.won}</td>
    <td className=" text-center">{data.drawn}</td>
    <td className=" text-center">{data.lost}</td>
    <td className=" text-center hidden sm:table-cell">{data.goals}</td>
    <td className=" text-center  gap-2 justify-center hidden sm:flex">
    {data.lastfive.map((imageSrc, index) => (
    <img key={index} src={imageSrc} alt='' className=' ' />
))}
    </td>
    <td className="p-2 text-center">{data.points}</td>
  </tr>
))}

          </tbody>
                    
                </table>       
            </div>  
      </div>
    </div>
  );
}

export default Standings;
