/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Navigation from "../routes/Navigation";
import Line from "../assets/img/Line_img.png"
import Hero_img from "../assets/img/Hero_img.png"
import Shirt_1 from "../assets/img/T-shirt_1.png"
import Shirt_2 from "../assets/img/T-shirt_2.png"
import Shirt_3 from "../assets/img/T-shirt_3.png"
import Shirt_4 from "../assets/img/T-shirt_4.png"
import Star from "../assets/img/Stars.png"
import Star_2 from "../assets/img/Star_2.png"
import Tow from "../assets/img/20.png"
import Tow_2 from "../assets/img/260.png"
import Rate from "../assets/img/Rates.png"
import Top_img1 from "../assets/img/Top_1.png"
import Top_img2 from "../assets/img/Top_2.png"
import Top_img3 from "../assets/img/Top_3.png"
import Top_img4 from "../assets/img/Top_4.png"
import Casual from "../assets/img/Dress_1.png"
import Formal from "../assets/img/Dress_2.png"
import Party from "../assets/img/Dress_3.png"
import Gym from "../assets/img/Dress_4.png"
import Casual_m from "../assets/img/Dressm_1.png"
import Formal_m from "../assets/img/Dressm_2.png"
import Party_m from "../assets/img/Dressm_3.png"
import Gym_m from "../assets/img/Dressm_4.png"
import Top_star from "../assets/img/Top_stars.png"
import Top_towsix from "../assets/img/$232.png"
import Top_selling_1 from "../assets/img/Top_selling.png"
import Top_selling_tow from "../assets/img/Top_selling_2.png"
import Vector from "../assets/img/Group.png"
import Vector1 from "../assets/img/zara-logo-1 1.png"
import gucci from "../assets/img/gucci-logo-1 1.png"
import Vector2 from "../assets/img/prada-logo-1 1.png"
import Vector3 from "../assets/img/Group (1).png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Right_icon from "../assets/img/Right.png"
import Happy from "../assets/img/Happy_stars.png"
import Main_hero_img from "../assets/img/hero_img_main.png"

const data = [
  {
    name: "Sarah M.",
    img: "https://t4.ftcdn.net/jpg/05/21/94/41/360_F_521944152_Itq1uszBYmYwTiG1RhVWwwZqTIpQVpOE.jpg",
    review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    name: "Alex K.",
    img: "https://t4.ftcdn.net/jpg/05/21/94/41/360_F_521944152_Itq1uszBYmYwTiG1RhVWwwZqTIpQVpOE.jpg",
    review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    name: "James L.",
    img: "https://t4.ftcdn.net/jpg/05/21/94/41/360_F_521944152_Itq1uszBYmYwTiG1RhVWwwZqTIpQVpOE.jpg",
    review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
]

const Home = (item) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Layout>

      {/* Hero_section */}
      <div className="w-full bg-[#f2f0f1] h-auto">
        <div className="grid max-w-[1240px] items-center mx-auto sm:grid grid-cols-1 md:grid-cols-2">
          <div className=" items-center">
            <div className="px-2 xl:px-0">
              <h2 className=" font-bold pb-4 mt-12 md:mt-0  text-4xl w-80 sm:w-[610px] lg:pb-7 xl:text-[64px] xl:leading-[70px]">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h2>
              <p className=" text-sm sm:lg: xl:text-lg  pb-4 lg:pb-7">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="w-full md:w-36 lg:w-52 bg-black text-white py-2 mb-8 rounded-full">
                Shop Now
              </button>
            </div>
            <div className=" flex flex-wrap justify-center gap-1  lg:gap-6 lg:flex-nowrap md:justify-start">
              <div className="border-r-2 border-gray-500 px-2 xl:px-">
                <h3 className=" md:text-lg lg:text-4xl font-bold">200+</h3>
                <p className=" text-[10px] lg:text-sm text-gray-500">International Brands</p>
              </div>
              <div className="border-r-2 border-gray-500 px-2  xl:px-5">
                <h3 className="md:text-xl lg:text-4xl font-bold">2,000+</h3>
                <p className="text-[10px]  lg:text-sm text-gray-500">High-Quality Products</p>
              </div>
              <div className="px-2 lg:px-0">
                <h3 className="md:text-xl lg:text-4xl font-bold">30,000+</h3>
                <p className="text-[10px]  lg:text-sm text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className=" w-full  flex justify-end pt-6">
            <img src={Hero_img} alt="Hero Image" className="xl:object-contain lg:object-contain  max-w-full md:h-[400px] lg:h-[400px] xl:h-[560px]" />
          </div>
        </div>
      </div>
      <div className="bg-black w-full">
        <div className="max-w-[1240px] mx-auto">
          <div className=" flex flex-wrap justify-center gap-8  py-10  md:py-8 md:px-1 md:gap-24 lg:flex-nowrap lg:gap-8 lg:justify-between ">
            <img src={Vector} alt="" className=" object-contain  w-20 lg:w-40" />
            <img src={Vector1} alt="" className="object-contain w-10 lg:w-20 " />
            <img src={gucci} alt="" className="object-contain w-20 lg:w-40" />
            <img src={Vector2} alt="" className="object-contain w-20 lg:w-40" />
            <img src={Vector3} alt="" className="object-contain w-20 lg:w-40" />
          </div>
        </div>
      </div>
      {/* cards_section */}
      <div className="w-full bg-white mt-8 ">
        <h1 className="text-center text-4xl font-black">NEW ARRIVALS</h1>
        <div className="w-[100%] md:gap-3 overflow-x-scroll lg:w-8/12 m-auto mt-8 md:flex justify-between ">
          <div className="w-[295px] mx-auto mb-4 md:mb-0">
            <img className="w-full" src={Shirt_1} alt="" />
            <h3 className="text-sm mt-2 font-bold">T-SHIRT WITH TAPE DETAILS</h3>
            <img className="mt-1" src={Star} alt="" />
            <h2 className="mt-1 font-bold text-2xl">$120</h2>
          </div>
          <div className="w-[295px] mx-auto mb-4 md:mb-0">
            <img className="w-full" src={Shirt_2} alt="" />
            <h3 className="text-sm mt-2 font-bold capitalize">SKINNY FIT JEANS</h3>
            <img className="mt-1" src={Star_2} alt="" />
            <h2 className="mt-1 font-bold text-2xl flex items-center gap-2">$120 <img src={Tow_2} alt="" /> <img src={Tow} alt="" /> </h2>
          </div>
          <div className="w-[295px] mx-auto mb-4 md:mb-0">
            <img src={Shirt_4} alt="" />
            <h3 className="text-sm mt-2 font-bold capitalize">CHECKERED SHIRT</h3>
            <img className="mt-1" src={Star} alt="" />
            <h2 className="mt-1 font-bold text-2xl">$180</h2>
          </div>
          <div className="w-[295px] mx-auto">
            <img src={Shirt_3} alt="" />
            <h3 className="text-sm mt-2 font-bold capitalize">SLEEVE STRIPED T-SHIRT</h3>
            <img className="mt-1" src={Star} alt="" />
            <img className="mt-1" src={Rate} alt="" />
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="w-[230px] border border-gray-200 m-auto text-sm rounded-full py-2 shadow-sm">View All</button>
        </div>
      </div>
      {/* cards_section_2 */}
      <div className="w-full bg-white mt-36">
        <h1 className="text-center text-4xl font-black uppercase">top selling</h1>
        <div className="w-[100%] md:gap-3 overflow-x-scroll lg:w-8/12 m-auto mt-8 md:flex justify-between ">
          <div className="w-[295px] mx-auto mb-4 md:mb-0">
            <img src={Top_img1} alt="" />
            <h3 className="text-sm mt-2 font-bold">VERTICAL STRIPED SHIRT</h3>
            <img className="mt-1" src={Top_star} alt="" />
            <h2 className="mt-1 font-bold text-2xl flex items-center gap-2">$212 <img src={Top_towsix} alt="" /> <img src={Tow} alt="" /> </h2>
          </div>
          <div className="w-[295px] mx-auto mb-4 md:mb-0">
            <img src={Top_img2} alt="" />
            <h3 className="text-sm mt-2 font-bold">COURAGE GRAPHIC T-SHIRT</h3>
            <img className="mt-1" src={Top_selling_1} alt="" />
            <h2 className="mt-1 font-bold text-2xl">$145</h2>
          </div>
          <div className="w-[295px] mx-auto mb-4 md:mb-0">
            <img src={Top_img3} alt="" />
            <h3 className="text-sm mt-2 font-bold">LOOSE FIT BERMUDA SHORTS</h3>
            <img className="mt-1" src={Top_selling_tow} alt="" />
            <h2 className="mt-1 font-bold text-2xl">$80</h2>
          </div>
          <div className="w-[295px] mx-auto">
            <img src={Top_img4} alt="" />
            <h3 className="text-sm mt-2 font-bold">FADED SKINNY JEANS</h3>
            <img className="mt-1" src={Star} alt="" />
            <h2 className="mt-1 font-bold text-2xl">$210</h2>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="w-[230px] border border-gray-200 m-auto text-sm rounded-full py-2 shadow-sm">View All</button>
        </div>
      </div>
      {/* Dress__section */}
      <div className="w-11/12 p-6  lg:w-8/12 m-auto bg-[#F2F0F1] mt-36 lg:p-12 mb-16 rounded-3xl">
        <h1 className="text-center text-4xl font-black">BROWSE BY DRESS STYLE</h1>
        <div className=" md:flex items-center gap-4 mt-10 justify-center">
          <img className="hidden md:block md:w-[40%] md:h-[230px]" src={Casual} alt="" />
          <img className="hidden md:block md:w-[60%] md:h-[230px]" src={Formal} alt="" />
          <div className="md:hidden lg:hidden">
            <img className="" src={Casual_m} alt="" />
            <img className="mt-4" src={Formal_m} alt="" />
            <img className="mt-4" src={Party_m} alt="" />
            <img className="mt-4" src={Gym_m} alt="" />
          </div>

        </div>
        <div className="md:flex items-center gap-4 mt-4 justify-center">
          <img className="hidden md:block md:w-[60%] md:h-[230px]" src={Party} alt="" />
          <img className="hidden md:block md:w-[40%] md:h-[230px]" src={Gym} alt="" />
        </div>
      </div>

      {/* <div className="w-8/12 mx-auto bg-[#F2F0F1] rounded-3xl p-12 mt-36 mb-16">
      <h1 className="text-center text-4xl font-black">BROWSE BY DRESS STYLE</h1>
      <div className="w-full mt-10">
        <div className="flex justify-start gap-4">
        <img className="hidden lg:block lg:w-[350px]" src={Casual} alt="" />
          <img className="hidden lg:block lg:w-[500px]" src={Formal} alt="" />
        </div>
        <div className="flex justify-start gap-4 mt-4">
        <img className="hidden lg:block lg:w-[500px]" src={Party} alt="" />
          <img className="hidden lg:block lg:w-[350px]" src={Gym} alt="" />
        </div>
      </div>
      </div> */}


      {/* CUSTOMERS_section */}
      <div className="w-full px-4 md:px-0">
        <div className='w-full md:w-8/12 m-auto'>
          <h1 className="text-4xl font-black mb-6">OUR HAPPY CUSTOMERS</h1>
          <div className=''>
            <Slider {...settings}>
              {data.map((d) => (
                <div className='bg-white h-auto text-black p-4 border-[1px] border-gray-200 rounded-xl'>
                  <div className=' h-auto '>
                    <img src={Happy} alt="" className='w-[140px]' />
                  </div>
                  <div className=''>
                    <p className='text-md font-semibold flex justify-start items-center my-2'>{d.name} <img src={Right_icon} alt="" /></p>
                    <p className="text-sm font-extralight text-gray-500">{d.review}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>


    </Layout>
  );
}

export default Home;
