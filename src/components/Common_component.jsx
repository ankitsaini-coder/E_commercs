/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import Shirt_1 from "../assets/img/T-shirt_1.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "Ankit",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZVEGlVtYOCYmJk3YPfhmINnTsAfZ8h4M3g&s",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, natus."
  },
  {
    name: "Ankit",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZVEGlVtYOCYmJk3YPfhmINnTsAfZ8h4M3g&s",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, natus."
  },
  {
    name: "Ankit",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZVEGlVtYOCYmJk3YPfhmINnTsAfZ8h4M3g&s",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, natus."
  },
]

function Common_component() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  
  return (
    <div className='bg-slate-900 h-screen w-full pt-56'>
    <div className='w-3/4 bg-red-500 m-auto'>
      <div className=''>
      <Slider {...settings}>
        {data.map((d) => (
          <div className='bg-white h-[450px] text-black rounded-xl'>
            <div className='rounded-t-xl h-56 bg-indigo-500 flex justify-center items-center'>
              <img src={d.img} alt="" className='h-44 w-44 rounded-full' />
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-4'>
              <p className='text-xl font-semibold'>{d.name}</p>
              <p>{d.review}</p>
              <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
    </div>
  )
}

export default Common_component