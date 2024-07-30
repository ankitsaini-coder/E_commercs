/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../assets/img/Nav_logo.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";
import { FaApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import Visa from "../assets/img/Visa.png"
import Mastercard from "../assets/img/Mastercard.png"
import Paypal from "../assets/img/Paypal.png"
import Apple from "../assets/img/Pay.png"
import GPay from "../assets/img/G Pay.png"










function Footer() {
  return (
    <>
    

{/* <footer className="bg-white dark:bg-[#F0F0F0] w-full">


<div className="bg-slate-950 w-11/12 lg:w-8/12 m-auto h-auto px-8 sm:px-16 py-5 rounded-3xl flex justify-between  items-center gap-2 relative  bottom-20 sm:flex flex-col md:flex-row">

<div className=" ">
  <h2 className="text-2xl font-black text-white w-full shadow-lg sm:text-center sm:w-5/12   md:w-11/12  md:text-xl md:text-start lg:w-10/12 lg:text-3xl lg:text-start xl:text-4xl xl:leading-tight xl:w-7/12 xl:text-start">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
</div>

<div className=""> 
  <div className="flex items-center bg-white rounded-full gap-1 px-4 mb-4 w-full mt-4 md:w-44 lg:w-68 xl:w-72">
  <MdOutlineEmail className='text-xl' />
  <input type="text" className="w-full outline-none rounded-full px-1 py-2 placeholder:text-sm border-0"  placeholder="Enter your email address"/>
  </div>
<div className="w-full">
<button className=" w-full py-2 outline-none rounded-full bg-white">Subscribe to Newsletter</button>
</div>

</div>

</div>

    <div className="mx-auto p-4 relative bottom-20 lg:py-8 lg:w-8/12">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
              <img src={Logo} alt="" className="h-8 me-3"/>
              </a>
              <p className='mt-5 text-sm font-light'>We have clothes that suits your style and <br /> which you’re proud to wear. From <br /> women to men.</p>
              <div className='flex mt-4 sm:justify-star'>
              <a href="#" className="text-black hover:text-slate-900 dark:hover:text-gray-500 bg-white p-2 rounded-full border border-slate-400">
              <FaTwitter className='w-4 h-4' />
              </a>
              <a href="#" className="text-white hover:text-gray-500 dark:hover:text-gray-500 ms-5 bg-black p-2 rounded-full border border-slate-900">
              <FaFacebookF  className='w-4 h-4'/>
              </a>
              <a href="#" className="text-black hover:text-slate-900 dark:hover:text-gray-500 ms-5 bg-white p-2 rounded-full border border-slate-900">
              <FaInstagram className='w-4 h-4' />

              </a>
              <a href="#" className="text-black hover:text-gray-500 dark:hover:text-gray-500 ms-5 bg-white p-2 rounded-full border border-slate-900">
              <FaGithub className='w-4 h-4' />
              </a>
              </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                  <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-black">Company</h2>
                  <ul className="text-gray-500 dark:text-gray-900 font-light">
                      <li className='py-1'>
                          <a href="https://flowbite.com/" className="hover:underline">About</a>
                      </li>
                      <li className='py-1'>
                          <a href="https://tailwindcss.com/" className="hover:underline">Features</a>
                      </li>
                      <li className='py-1'>
                          <a href="https://tailwindcss.com/" className="hover:underline">Works</a>
                      </li>
                      <li className='py-1'>
                          <a href="https://tailwindcss.com/" className="hover:underline">Career</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-black">Help</h2>
                  <ul className="text-gray-500 dark:text-gray-900 font-light">
                      <li className='py-1'>
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Customer Support</a>
                      </li>
                      <li className='py-1'>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Delivery Details</a>
                      </li>
                      <li className='py-1'>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Terms & Conditions</a>
                      </li>
                      <li className='py-1'>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Privacy Policy</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-black">FAQ</h2>
                  <ul className="text-gray-500 dark:text-gray-900 font-light">
                      <li className="py-1">
                          <a href="#" className="hover:underline">Account</a>
                      </li>
                      <li className='py-1'>
                          <a href="#" className="hover:underline">Manage Deliveries</a>
                      </li>
                      <li className='py-1'>
                          <a href="#" className="hover:underline">Orders</a>
                      </li>
                      <li className='py-1'>
                          <a href="#" className="hover:underline">Payments</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-black">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-900 font-light">
                      <li className="py-1">
                          <a href="#" className="hover:underline">Free eBooks</a>
                      </li>
                      <li className='py-1'>
                          <a href="#" className="hover:underline">Development Tutorial</a>
                      </li>
                      <li className='py-1'>
                          <a href="#" className="hover:underline">How to - Blog</a>
                      </li>
                      <li className='py-1'>
                          <a href="#" className="hover:underline">Youtube Playlist</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-400 lg:my-8" />

      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-lg text-gray-500 sm:text-center dark:text-gray-400 font-light"> Shop.co © 2000-2023, All Rights Reserved
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-slate-900 dark:hover:text-slate-900 bg-white px-3 rounded-md shadow-md">
              <RiVisaLine className='text-4xl text-blue-600'/>
              </a>
              <a href="#" className="text-gray-500 hover:text-slate-900 dark:hover:text-slate-900 bg-white px-3 rounded-md shadow-md ms-4">
              <RiMastercardFill className='text-4xl text-red-600'/>


              </a>
              <a href="#" className="text-gray-500 hover:text-slate-900 dark:hover:text-slate-900 bg-white px-3 rounded-md shadow-md ms-4">
              <RiVisaLine className='text-4xl text-blue-600'/>
              </a>
              <a href="#" className="text-gray-500 hover:text-slate-900 dark:hover:text-slate-900 bg-white px-3 rounded-md shadow-md ms-4">
              <FaApplePay className='text-4xl text-black' />
              </a>
              <a href="#" className="text-gray-500 hover:text-slate-900 dark:hover:text-slate-900 bg-white px-3 rounded-md shadow-md ms-4">
              <FaGooglePay className='text-4xl text-black ' />
              </a>

          </div>
      </div>
    </div>
</footer> */}





<div className="max-w-[1240px] m-auto relative top-40 md:relative md:top-20 px-4  xl:px-0 ">
<div className="grid grid-cols-12 bg-black h-auto rounded-3xl items-center py-7 px-9 gap-5">
      <div className=" col-span-12  md:col-span-7">
       <div className="max-w-[450px] text-[32px] sm:text-4xl font-bold text-white ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
      </div>
      <div className="col-span-12 md:col-span-5">
        <div className="flex items-center gap-0  py-1 rounded-full px-4 bg-white">
        <MdOutlineEmail className='text-lg' />
          <input type="text" className="w-full outline-none border-0 placeholder:text-sm" placeholder="Enter your email address"/>
        </div>
        <button className=" w-full  py-2 rounded-full px-4 bg-white mt-4 text-lg">Subscribe to Newsletter</button>
      </div>
    </div>
</div>
      <div className="w-full bg-gray-200 pt-48  md:pt-32 h-auto py-8 px-5 items-center">


        {/*=================> footer__list__items <======================*/}



        <div className="max-w-[1240px] m-auto">
          <div className='grid grid-cols-12  gap-6  border-b-[1px] border-gray-300 pb-5'>
            <div className='col-span-12 lg:col-span-4  '>
              <img src={Logo} alt="" className="mb-4 w-[130px]" />
              <p className="w-8/12 text-sm font-extralight leading-7 ">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex justify-start gap-5 mt-6 cursor-pointer">
                <FaTwitter className=" bg-white text-3xl rounded-full p-2 hover:bg-black hover:text-white" />
                <FaFacebookF className=" bg-black text-white text-3xl rounded-full p-2  hover:bg-white hover:text-black" />
                <FaInstagram className=" bg-white text-3xl rounded-full p-2  hover:bg-black hover:text-white" />
                <FaGithub className=" bg-white text-3xl rounded-full p-2  hover:bg-black hover:text-white" />
              </div>
            </div>
            <div className='col-span-6 lg:col-span-2'>
              <h2 className="mb-4 uppercase tracking-widest	"> Company </h2>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                About
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Features
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Works
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Career
              </p>
            </div>
            <div className='col-span-6 lg:col-span-2 '>
              <h2 className="mb-4 uppercase tracking-widest	"> Help </h2>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Customer Support
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Delivery Details
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Terms & Conditions
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Privacy Policy
              </p>
            </div>
            <div className='col-span-6 lg:col-span-2 '>
              <h2 className="mb-4 uppercase tracking-widest	"> FAQ </h2>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Acc uppercase ount
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Manage Deliveries
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Orders
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Payments
              </p>
            </div>
            <div className='col-span-6 lg:col-span-2 '>
              <h2 className="mb-4 uppercase tracking-widest	"> Resources </h2>
              <p className="font-extralight	cursor-pointer text-sm leading-9">
                Free eBooks
              </p>
              <p className="font-extralight	cursor-pointer text-sm leading-9">
                Development Tutorial
              </p>
              <p className="font-extralight	cursor-pointer text-sm leading-9">
                How to - Blog
              </p>
              <p className="font-extralight	cursor-pointer text-sm leading-9">
                Youtube Playlist
              </p>
            </div>
          </div>
        </div>


        <div className="max-w-[1240px] m-auto pt-5">
          <div className=" lg:flex justify-between text-center ">
            {/*==============> {Footer Copy right text _section} <==================*/}
            <div className="">
              <p className="font-extralight text-sm ">
                Shop.co © 2000-2024, All Rights Reserved
              </p>
            </div>

            {/*==============> {payIcons_section} <==================*/}
            <div className="flex justify-center items-center gap-5 mt-5 lg:mt-0">
              <div className="bg-white w-11 h-5 py-4 rounded-md flex items-center justify-center cursor-pointer">
                <img src={Visa} alt="" />
              </div>
              <div className="bg-white w-11 h-5 py-4 rounded-md flex items-center justify-center cursor-pointer">
                <img src={Mastercard} alt="" />
              </div>
              <div className="bg-white w-11 h-5 py-4 rounded-md flex items-center justify-center cursor-pointer">
                <img src={Paypal} alt="" />
              </div>
              <div className="bg-white w-11 h-5 py-4 rounded-md flex items-center justify-center cursor-pointer">
                <img src={Apple} alt="" />
              </div>
              <div className="bg-white w-11 h-5 py-4 rounded-md flex items-center justify-center cursor-pointer">
                <img src={GPay} alt="" />
              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default Footer