import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { FaSearchengin } from 'react-icons/fa6'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { cardData, Pdfdata } from '../../Data'
import Pdfcard from '../Pdfcard/Pdfcard'
const Docs = () => {
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
          color:"#2e2e2e",
          textAlign:"center",
        
        }
      }>TypeScript</h3>
      <section className="widget-container flex   justify-center items-center  ">
               

        <div className="grid grid-cols-3 gap-8 p-2 w-full shadow-lg">
          {Pdfdata.map((item) => (
            <Pdfcard item={item} />
          ))}
        </div>
      </section>
    </main>
  </div>
  )
}

export default Docs