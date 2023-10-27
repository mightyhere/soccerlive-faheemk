import React from "react";
import { player1, player2,player3, manCity,manUtd } from "../assets";

const playerData = [
    {
      playerImage: player1,
      playerName: "Nathan Ake",
      clubImage: manCity,
      rating: 9.1,
      position: "midfielder",
    },
    {
      playerImage: player2,
      playerName: "Bruno Fernades",
      clubImage: manUtd,
      rating: 8.7,
      position: "midfielder",
    },
    {
      playerImage: player3,
      playerName: "Mohammed Salah",
      clubImage: manCity,
      rating: 7.6,
      position: "midfielder",
    },
    {
      playerImage: player3,
      playerName: "Bruno Fernades",
      clubImage: manUtd,
      rating: 8.7,
      position: "midfielder",
    },
    {
      playerImage: player1,
      playerName: "Nathan Ake",
      clubImage: manCity,
      rating: 7.5,
      position: "midfielder",
    },
    {
      playerImage: player2,
      playerName: "Bruno Fernades",
      clubImage: manUtd,
      rating: 6.5,
      position: "midfielder",
    },
   
    
  ];

function TopPlayers() {
  return (
    <div className=" sm:w-1/3  shadow-md bg-white rounded-lg p-4  mt-2 sm:mt-0">
      <div className=" scroll-container">
        <h1 className="p-4 text-[24px] font-semibold">Top Players</h1>
        {playerData.map((player, index) => (
          <div
            key={index}
            className="bg-gray-100 w-full h-[6rem] mt-4 rounded-lg flex flex-row justify-between sm:p-2   "
          >
            <img
              src={player.playerImage}
              alt={player.playerName}
              className="w-[6rem] h-[6rem]"
            />
            <div className="p-2 mt-4 flex flex-col">
              <h1 className="text-lg font-semibold">{player.playerName}</h1>
              <div className="flex flex-row items-center">
                <img src={player.clubImage} alt="" className="h-[1.5rem]" />
                <p className="text-md px-2">{player.position}</p>
              </div>
            </div>
            <div className="  mt-6 mr-4 ">
              <div className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 w-10 h-8 rounded-lg items-cen">
                <p className="text-white text-center">{player.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopPlayers;