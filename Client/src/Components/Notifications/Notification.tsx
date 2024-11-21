import React from 'react'
import { FaSearchengin } from 'react-icons/fa6'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Sidebar from '../Sidebar/Sidebar'


const Notification = () => {
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
            <FaSearchengin className="" style={
              {
                fontSize:"20px",
                fontWeight:"900",
              }
            }/>
          </label>
        </div>
        <div className="notifi flex items-center w-20 justify-center   ">
          <div className="w-full text-2xl ">
            <IoMdNotificationsOutline style={
              {
                fontSize:"25px",
                fontWeight:"900",
              }
            } />
          </div>
        </div>
      </div>
      <h3 style={
        {
          fontSize:"20px",
          fontWeight:"600",
          color:"black",
          textAlign:"center",
        
        }
      }>Notifications</h3>
      <section className="widget-container flex   justify-center items-center  ">
               
      <div   className='flex flex-col  justify-center items-center p-10 shadow-2xl gap-3'>
            <h1  style={
            {
              fontSize:"35px",
              fontWeight:"600",
              color:"black",
              textAlign:"center",
            
            }}>No Notifications over  there </h1>
            <p className='text-black font-medium'    style={
            {
              fontSize:"20px",
              color:"black",
              textAlign:"center",
            
            }}>You will have the new notifications when admin upload the pdfs.
              
            </p>
            <p className='font-medium'>We will get u soon!</p>
         </div>
       
      </section>
    </main>
    </div>
  )
}

export default Notification
