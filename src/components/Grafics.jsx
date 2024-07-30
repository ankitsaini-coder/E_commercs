/* eslint-disable no-unused-vars */
import React from 'react'
import { TbMathGreater } from "react-icons/tb";
import E__2 from "../assets/img/E__5.png"
import E__3 from "../assets/img/E__10.png"
import E__4 from "../assets/img/E__16.png"
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import Star from "../assets/img/Stars.png"

function Grafics() {
    let Links = [
        { name: "Home ", link: "/" },
        { name: "Shop ", link: "/" },
        { name: "Men ", link: "/" },
        { name: "T-shirts ", link: "/" },
      ];
  return (
    <>
          <div className=" w-full h-auto 2xl:px-0 md:px-10 ">
        <div className=" 2xl:w-10/12 xl:11/12 m-auto h-auto px-10 py-5 border-t-2">
          <div className="flex justify-start gap-5">
            {Links.map((link) => (
              <li key={link.name} className="list-none flex items-center gap-2">
                <a href={link.link}>{link.name}</a>
                <TbMathGreater />
              </li>
            ))}
          </div>
        </div>
      </div>

      <div className=" 2xl:w-10/12 md:11/12 md:px-10 m-auto h-auto py-10 ">
        <div className="  flex  gap-10">
            <div className="w-6/12 flex gap-7">
              <div className="w-3/12 h-auto">
                <img src={E__3} className="w-full mb-3" alt="" />
                <img src={E__2} className="w-full mb-3" alt="" />
                <img src={E__2} className="w-full " alt="" />
              </div>
              <div className="w-9/12">
                <img src={E__3} className="w-full object-cover" alt="" />
           </div>
              </div>
            <div className=" h-auto w-6/12 ">
              <div className="border-b-2 ">
              <h6 className="2xl:text-[55px] md:text-5xl  uppercase font-bold">
                One Life Graphic T-shirt
              </h6>
              <div className="mb-4 mt-4 md:text-2xl text-yellow-500">
              <img className='w-[233px]' src={Star} alt="" />
              </div>
              <div className="flex gap-5 items-center ">
                <h1 className="2xl:text-4xl md:text-3xl font-bold">$260</h1>
               <s  className= "2xl:text-4xl md:text-3xl font-bold text-gray-300">$300</s>
               <p  className="2xl:text-xl md:text-lg bg-red-200 text-red-600 py-1 px-3 rounded-3xl">-40%</p>
              </div>
              <p className="2xl:text-xl md:text-lg text-gray-500 2xl:pt-5 2xl:pb-4 md:pt-4 md:pb-4 ">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
            </div>
            <div className="border-b-2 py-5">
              <h1 className="text-gray-500 text-xl md:pb-4  ">Select Colors</h1>
              <div className="flex gap-3">
                <span className="p-2 bg-gray-900 rounded-full text-white">
                    <FaCheck />
                </span>
                <span className="p-4 bg-green-900 rounded-full text-white"></span>
                <span className="p-4 bg-blue-900 rounded-full text-white"></span>
              </div>
            </div>
            <div className="border-b-2 lg:py-5 md:py-4">
              <p className="text-gray-500 text-xl md:pb-4">Choose Size</p>
              <div className="flex gap-5 ">
                <button className="bg-gray-200 2xl:py-3 md:py-2  w-32 text-gray-700 rounded-3xl hover:bg-black hover:text-white transition outline-none">Small</button>
                <button className="bg-gray-200 2xl:py-3 md:py-2 w-32 text-gray-700 rounded-3xl hover:bg-black hover:text-white transition outline-none">Medium</button>
                <button className="hover:bg-gray-200 2xl:py-3 md:py-2 w-32 hover:text-gray-700 rounded-3xl bg-black text-white transition outline-none">Large</button>
                <button className="bg-gray-200 2xl:py-3 md:py-2 w-32 text-gray-700 rounded-3xl hover:bg-black hover:text-white transition outline-none">X-Large </button>
              </div>
            </div>
            <div className="border-b-2 2xl:py-6 lg:py-5 md:py-4 flex gap-20 justify-between">
              <div className=" bg-gray-200 w-40  flex items-center justify-around rounded-full hover:bg-black hover:text-white transition">
                <h1>-</h1>
                <h1 className='text-sm'>1</h1>
                <h1>+</h1>
              </div>
              <button className="w-[500px] lg:text-xl md:text-lg hover:bg-gray-200 hover:text-black lg:py-4 md:py-3  rounded-full bg-black text-white transition outline-none">Add to Cart</button>
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Grafics