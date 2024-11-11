import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { FaSearchengin } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Pdfdata } from "../../Data";
import Pdfcard from "../Pdfcard/Pdfcard";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
const Profile = () => {
  return (
    <div className="admin-container grid grid-cols-[1fr_4fr] h-screen bg-[rgba(247,247,247)] gap-4  shadow-black/20 ">
      <Sidebar />
      <main className=" dashboard overflow-y-auto  shadow-black/20 ">
        <div className=" bar h-16 flex flex-row  justify-between w-full  py-0  ">
          <div className=" flex  items-center w-3/5     py-2 px-4 gap-2 ">
            <input
              type="text"
              className="px-5 py-1 w-full rounded-2xl "
              id="search"
              placeholder="Search any course"
            />
            <label htmlFor="search">
              <FaSearchengin
                className=""
                style={{
                  fontSize: "20px",
                  fontWeight: "900",
                }}
              />
            </label>
          </div>
          <div className="notifi flex items-center w-20 justify-center   ">
            <div className="w-full text-2xl ">
              <IoMdNotificationsOutline
                style={{
                  fontSize: "25px",
                  fontWeight: "900",
                }}
              />
            </div>
          </div>
        </div>
        <h3
          style={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#2e2e2e",
            textAlign: "center",
          }}
        >
          My Profile
        </h3>
        <section className=" flex   justify-center items-center mx-auto   ">
          <div className="flex items-center gap-6 p-10 shadow-xl rounded-xl  ">
            
              <img  className="rounded-[50%] w-40 h-40  "
                src="https://ew.com/thmb/x8cJQbbbOEeblVQzTJwXCR2Ms40=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chris-hemsworth-future-of-thor-061323-01-51e6c2883cd444af8fcab4b3be9c40cd.jpg"
                alt="Profile pic"
              />
          
            <div className="content gap-3 ">
                <div className="flex flex-col justify-between  text-left  max-w-[475px] gap-3  ">
                <h3 style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#000",
           
          }}>Chris Hemsworth</h3>
          <p>thor45@eve.io</p>
              <div>
                <p style={{
                  fontSize:"20px,",
                  letterSpacing:"2px",
                  fontWeight: "600",
                 
                }}>I am god of thunder protecting my country from evils.I am from asgard far from earth </p>

               
              </div>
              <div className="flex gap-4">
                <button className="flex">
                Edit <MdEdit/> 
                </button>
                
                <button>
                  Change Picture</button></div>
                </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
