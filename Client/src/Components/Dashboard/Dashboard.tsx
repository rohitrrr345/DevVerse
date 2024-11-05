import { useEffect, useState } from "react";
import { FaSearchengin } from "react-icons/fa6";
import Sidebar from "../Sidebar/Sidebar";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import Card from "../Card/Card";
const Dashboard = () => {
 
  const cardData = [
    {
      id: 1,
      title: "Green Iguana",
      description: "Green iguanas are native to Central and South America and are popular pets.",
      imageUrl: "/static/images/cards/contemplative-reptile.jpg",
    },
    {
      id: 2,
      title: "Chameleon",
      description: "Chameleons are known for their color-changing abilities and unique eyes.",
      imageUrl: "/static/images/cards/chameleon.jpg",
    },
    {
      id: 3,
      title: "Komodo Dragon",
      description: "Komodo dragons are the largest living species of lizard, found in Indonesia.",
      imageUrl: "/static/images/cards/komodo-dragon.jpg",
    },
  ];
  
 

  

  return (
    
    <div className="admin-container grid grid-cols-[1fr_4fr] h-screen bg-[rgba(247,247,247)] gap-4 ">
      <Sidebar />
      <main className=" dashboard overflow-y-auto">
        <div className=" bar h-16 flex flex-row  justify-between w-full  py-0  ">
          <div className=" flex  items-center      py-2 px-4 gap-2 ">
           
          <input type="text" className="px-5 py-1 w-full rounded-2xl "  id="search" placeholder="Search" />
            <label htmlFor="search"><FaSearchengin className=""/></label>


           
            
          </div>
          <div className="notifi flex items-center w-20 justify-center   ">
          <div className="w-full text-2xl ">
          <IoMdNotificationsOutline/>

          </div>
          </div>
        </div>
       
        <section className="widget-container flex   justify-center items-center  ">
         
           <div className="flex justify-center w-full  items-center ">
           <h1 className="text-4xl font-semibold text-center ">Welcome to Devverse</h1>




           </div>
           <div className="grid grid-cols-3 gap-8 p-2">
       {


cardData.map((item)=>(
    <Card/>
))
        
       }
           </div>
                
        
        </section>
       
       
      </main>
    </div>
  );
};
const WidgetItem = ({ heading, percent, color, amount = false }) => (
  <article className="widget w-[16rem] bg-white shadow-[0_0_10px_rgba(0,0,0,0.132)] p-8 rounded-[10px] flex flex-row justify-between items-stretch gap-0 ">
    <div className="widget-info">
      <p className="opacity-[0.7] text-[0.8rem] ">{heading}</p>
      <h4 className="text-[1.5rem]">{amount>100 ? `>100` : amount}</h4>
      {percent > 0 ? (
        <span className="green flex flex-row justify-[unset] items-center gap-[0.2rem] ">
          <HiTrendingUp /> +{percent>100?">100":percent}%{" "}
        </span>
      ) : (
        <span className="red flex flex-row justify-[unset] items-center gap-[0.2rem]">
          <HiTrendingDown /> {percent>100?">100":percent}%{" "}
        </span>
      )}
    </div>

    <div
      className="widget-circle rounded-full flex-none grid place-items-center bg-[aquamarine] relative h-20 w-20 "
      style={{
        background: `conic-gradient(
          ${color} ${(Math.abs(percent) / 100) * 360}deg,
          rgb(255, 255, 255) 0
        )`,
      }}
    >
      <span
        className="relative"
        style={{
          color,
        }}
      >
        {percent>100?">100":percent}%
      </span>
    </div>
  </article>
);

const CategoryItem = ({ color, value, heading }) => (
  <div className="category-item w-full overflow-x-hidden flex flex-row justify-center gap-4 p-4">
    <h5 className="tracking-[1px] font-light">{heading}</h5>
    <div className="ml-auto w-[6rem] bg-[rgb(217,217,217)] rounded-[20px] h-[0.5rem] flex-none ">
      <div
        className="rounded-[20px] h-full  "
        style={{
          backgroundColor: "blue",
          width: `${value > 100 ? 100 : value}%`,
        }}
      ></div>
    </div>
    <span className="text-[0.8rem] font-bold">
      {value > 100 ? "Full" : value}%
    </span>
  </div>
);

export default Dashboard;