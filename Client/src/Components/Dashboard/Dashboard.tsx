import { useEffect, useState } from "react";
import { FaSearchengin } from "react-icons/fa6";
import Sidebar from "../Sidebar/Sidebar";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
const Dashboard = () => {
 

 

  

  return (
    <div className="admin-container grid grid-cols-[1fr_4fr] h-screen bg-[rgba(247,247,247)] gap-4 ">
      <Sidebar />
      <main className=" dashboard overflow-y-auto">
        <div className=" bar h-16 flex flex-row  justify-[unset] px-4 py-0  ">
          <div className="mr-auto flex justify-center items-center w-full py-4 px-0 gap-2 ">
           
          <input type="text" className="px-2 py-1 w-1/3 rounded-2xl "  id="search" placeholder="Search" />
            <label htmlFor="search"><FaSearchengin className=""/></label>


           
            
          </div>
        </div>
        <br />
        <section className="widget-container flex  flex-row justify-between items-stretch gap-8 pt-8 pr-8 pb-8 pl-0 ">
         
        
         
        
        </section>
        <section className="graph-container flex flex-row justify-[unset] items-[unset] gap-8 pt-0 pr-[2rem] pb-[2rem] pl-0 ">
          <div className="revenue-chart w-full px-4 py-12 ">
            <h2 className="tracking-[3px] font-light uppercase mt-[1rem] mr-0 mb-[2rem] ml-[0.25rem] text-center">
             Stastics and Data
            </h2>
            {/* Grapph here */}
            
          </div>

          <div className="dashboard-categories w-full pb-[2rem] max-w-[16rem] flex flex-col justify-center items-[unset] gap-0 ">
            <h2 className="tracking-[3px] font-light uppercase text-center mt-[1.5rem] mr-0 mb-[2rem] ml-0">
              Coin Market
            </h2>
            <div className="overflow-y-auto pl-1">
              
            </div>
          </div>
        </section>
        <section className="transaction-container flex justify-center pt-0 pr-[2rem] pb-[2rem] pl-0 h-[30rem]">
          <div className="gender-chart w-full max-w-80 p-4 relative">
            <h2 className="text-center mt-[1.5rem] mr-0 mb-[2rem] ml-0 tracking-[3px] font-light uppercase ">
             Coin and exchanges
            </h2>

           

            <p className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              
            </p>
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