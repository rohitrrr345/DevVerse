import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { FaSearchengin } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Pdfdata } from "../../Data";
import Pdfcard from "../Pdfcard/Pdfcard";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import SavedItems from "../SavedCard/SavedItems";



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
          <div className="notifi flex items-center w-20 justify-center ">
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
     
        <section className=" flex flex-col   justify-center items-center   ">
        <h3
          style={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#000000",
          }}
        >
          My Profile
        </h3>
          <div className="flex flex-col  gap-6 p-10 shadow-2xl">
            
            <div className="flex gap-2 justify-center ">
            <img  className="rounded-[50%] w-40 h-40 border-2 border-spacing-1  "
                src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-09/08/full/1662657385-7641.jpg"
                alt="Profile pic"
              />
          
            <div className="content gap-3 flex flex-col  max-w-[500px]  ">
                <div className="flex flex-col justify-between  text-left  max-w-[475px] gap-3  ">
                <h3 style={{
            fontSize: "25px",
            fontWeight: "700",
            color: "#000",
           
          }}>Virat Kohli</h3>
          <p style={{
            fontSize: "15px",
            fontWeight: "600",
            color: "#000",
           
          }}>thor45@eve.io</p>
              <div>
                <p style={{
                  fontSize:"20px,",
                  letterSpacing:"0px",
                  fontWeight: "500",
                 
                }}>I am god of thunder protecting my country from evils.I am from asgard far from earth </p>

               
              </div>
              <div className="flex gap-4 items-center">
                <button className="flex items-center gap-1">
                Edit <MdEdit/> 
                </button>
                
                <button className="flex items-center gap-1">
                  Change <CgProfile/></button>
                  <button className="flex items-center gap-1">
                  <IoIosInformationCircleOutline/> Joined  Sep 2024</button>
                  </div>
                  
                </div>
                
               <div className="text-left">
                      <h1   style={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#000000",
            
          }}>Saved Courses</h1>
               </div>
         
            </div>
            </div>
            <div className="grid grid-cols-3 gap-8 p-2 w-full shadow-lg">
          {Pdfdata.map((item) => (
            <SavedItems item={item} />
          ))}
        </div>
          </div>
           
      
        </section>
      </main>
    </div>
  );
};

export default Profile;
