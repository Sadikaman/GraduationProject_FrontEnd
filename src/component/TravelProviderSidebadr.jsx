import React from 'react'
import { CiMoneyBill } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { FcPackage } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { CiLogout,CiSettings } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { FcBarChart } from "react-icons/fc";
import { AiFillBook } from "react-icons/ai";
import { TiMessageTyping } from "react-icons/ti";
const TravelProviderSidebadr = () => {
  return (
    <>
      <button 
  data-drawer-target="logo-sidebar" 
  data-drawer-toggle="logo-sidebar" 
  aria-controls="logo-sidebar" 
  type="button" 
  className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
  <span className="sr-only">Open sidebar</span>
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
  </svg>
</button>

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">


    <a href="/" className="flex w-full justify-center">
      <img src="AfroLogo.png" className="h-28 " alt="Afro Logo" />
    </a>

<div className='flex gap-1 w-full mt-5'>
    <img src="ppc.jpg" className='h-5' alt="" />
    <h1 className='flex flex-col font-bold text-sm'>ABC Tour and Accomodation  <p className='text-gray-400'>ID: ATT34GHMKL56</p> </h1>
   
</div>

    <ul className="space-y-2 font-medium flex flex-col justify-center items-center mt-7 gap-4">
      <li>
        <a href="/TravelProviderPage" className="flex justify-center  p-2 rounded-full w-52  text-gray-900 rounded-lgitems-center bg-white shadow-sm gap-5  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <svg className="w-5 h-5 text-blue-500 transition duration-75 dark:text-gray-400 group-hover:text-blue-700 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
          </svg>
          <span className="ms-3">Analytics</span>
        </a>
      </li>
    <h1 className='pt-5 text-gray-500 font-semibold'>BUSINESS SETTINGS</h1>

      <li>
        <a href="/TpEarning" className="flex items-center font-bold p-2 text-gray-900 rounded-lg gap-3 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <CiMoneyBill className='text-2xl text-[#2986FE] '/>
          <span className="flex-1 ms-3 whitespace-nowrap text-[#2986FE] text-xl">Earnings</span>
        </a>
      </li>
      <li>
        <a href="/TpTransaction" className="flex items-center font-bold p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <GrTransaction className='text-2xl text-[#2986FE] '/>
          <span className="flex-1 ms-3 whitespace-nowrap text-[#2986FE] text-xl">Transactions</span>
        </a>
      </li>
      <li>
        <a href="/Packagess" className="flex items-center font-bold gap-3 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <AiFillBook className='text-2xl text-[#2986FE] '/>
          <span className="flex-1 ms-3 whitespace-nowrap text-[#2986FE] text-xl">Packages</span>
        </a>
      </li>
      <li>
        <a href="/Tpcustomer" className="flex items-center font-bold p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <CgProfile className='text-2xl text-[#2986FE] '/>
          <span className="flex-1 ms-3 whitespace-nowrap text-[#2986FE] text-xl">Customers</span>
        </a>
      </li>

      <h1 className=' text-gray-500 font-semibold'>APPLICATION SETTINGS</h1>

      <li>
        <a href="/Notification" className="flex items-center font-bold p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <IoMdNotifications  className='text-2xl text-[#2986FE] '/>
          <span className="flex-1 ms-3 whitespace-nowrap text-[#2986FE] text-xl">Notifications</span>
        </a>
      </li>
      <li>
        <a href="/TpStatus" className="flex items-center font-bold p-2 gap-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <FcBarChart className='text-2xl text-[#2986FE] '/>
          <span className="flex-1 ms-3 whitespace-nowrap text-[#2986FE] text-xl">Status</span>
        </a>
      </li>
      <li>
        <a href="/TpSetting" className="flex items-center font-bold p-2 gap-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <CiSettings className='text-2xl text-[#2986FE] '/>
          <span className="flex-1 ms-3 whitespace-nowrap text-[#2986FE] text-xl">Settings</span>
        </a>
      </li>
      <li>
        <a href="/MessagingInterface" className="flex items-center font-bold p-2 gap-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <TiMessageTyping className='text-2xl text-[#2986FE] '/>
          <span className="flex-1 ms-3 whitespace-nowrap text-[#2986FE] text-xl">Message</span>
        </a>
      </li>
    </ul>
  </div>
</aside>

    </>
  )
}

export default TravelProviderSidebadr
