/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Top_bottom from "../assets/img/Top_bottom.png"
import Right_icon from "../assets/img/Right.png"
import Tab_1img from "../assets/img/Tab_1img.png"
import Tab_star_1img from "../assets/img/Tab_star_1img.png"
import Tab_star_2img from "../assets/img/Tab_star_2img.png"
import Tab_star_3img from "../assets/img/Tab_star_3img.png"


function Tab_2() {
    const [activeTab, setActiveTab] = useState("tab1");

    const handelTabChange = (tab) => {
        setActiveTab(tab)
    }
    return (
        <>
            <div className='w-[1240px] m-auto'>
                <div className='tabs mb-5 flex justify-around text-2xl font-extralight text-gray-500'>
                    <button className={activeTab === 'tab1' ? 'active-tab' : ''} onClick={() => handelTabChange('tab1')}>
                        Product Details
                    </button>
                    <button className={activeTab === 'tab2' ? 'active-tab' : ''} onClick={() => handelTabChange('tab2')}>
                        Rating & Reviews
                    </button>
                    <button className={activeTab === 'tab3' ? 'active-tab' : ''} onClick={() => handelTabChange('tab3')}>
                        FAQs
                    </button>
                </div>
                <hr />
                <div className='w-full my-4 flex justify-between items-center '>
                    <div className=''>
                        <h1 className='text-2xl font-semibold'>All Reviews <span className='text-sm text-gray-400 font-light'> (451)</span></h1>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <img src={Top_bottom} alt="" />
                        <form className="max-w-xs mx-auto">
                            <select id="countries" className="bg-gray-200 border-0 text-sm rounded-lg w-full p-2.5">
                                <option selected>Latesty</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </form>
                        <button className='bg-black text-white py-2 px-5 rounded-full border-0'>Write a Review</button>
                    </div>
                </div>
                <div className=' max-w-full'>
                    <div className=' max-w-full'>
                        {activeTab === 'tab1' && (
                            <div className='flex justify-between'>

                                <a href="#" className="block max-w-[600px] p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <div className='flex justify-between mb-2'>
                                        <img src={Tab_star_1img} alt="" />
                                        <img src={Tab_1img} alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1">Samantha D. <img src={Right_icon} alt="" /></h5>
                                    <p className="font-extralight text-gray-700 dark:text-gray-400">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                                    <h2 className='text-gray-700 dark:text-gray-400 mt-4 font-light'>Posted on August 14, 2023</h2>
                                </a>

                                <a href="#" className="block max-w-[600px] p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <div className='flex justify-between mb-2'>
                                        <img src={Tab_star_2img} alt="" />
                                        <img src={Tab_1img} alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1">Alex M. <img src={Right_icon} alt="" /></h5>
                                    <p className="font-extralight text-gray-700 dark:text-gray-400">"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
                                    <h2 className='text-gray-700 dark:text-gray-400 mt-4 font-light'>Posted on August 15, 2023</h2>
                                </a>

                            </div>
                        )}
                        {activeTab === 'tab2' && (
                            <div className='flex justify-between'>

                                <a href="#" className="block max-w-[600px] p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <div className='flex justify-between mb-2'>
                                        <img src={Tab_star_3img} alt="" />
                                        <img src={Tab_1img} alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1">Ethan R. <img src={Right_icon} alt="" /></h5>
                                    <p className="font-extralight text-gray-700 dark:text-gray-400">""This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.""</p>
                                    <h2 className='text-gray-700 dark:text-gray-400 mt-4 font-light'>Posted on August 16, 2023</h2>
                                </a>

                                <a href="#" className="block max-w-[600px] p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <div className='flex justify-between mb-2'>
                                        <img src={Tab_star_2img} alt="" />
                                        <img src={Tab_1img} alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1">Olivia P. <img src={Right_icon} alt="" /></h5>
                                    <p className="font-extralight text-gray-700 dark:text-gray-400">"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
                                    <h2 className='text-gray-700 dark:text-gray-400 mt-4 font-light'>Posted on August 17, 2023</h2>
                                </a>

                            </div>
                        )}
                        {activeTab === 'tab3' && (
                            <div className='flex justify-between'>

                                <a href="#" className="block max-w-[600px] p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <div className='flex justify-between mb-2'>
                                        <img src={Tab_star_2img} alt="" />
                                        <img src={Tab_1img} alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1">Liam K. <img src={Right_icon} alt="" /></h5>
                                    <p className="font-extralight text-gray-700 dark:text-gray-400">""This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
                                    <h2 className='text-gray-700 dark:text-gray-400 mt-4 font-light'>Posted on August 18, 2023</h2>
                                </a>

                                <a href="#" className="block max-w-[600px] p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <div className='flex justify-between mb-2'>
                                        <img src={Tab_star_1img} alt="" />
                                        <img src={Tab_1img} alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1">Ava H. <img src={Right_icon} alt="" /></h5>
                                    <p className="font-extralight text-gray-700 dark:text-gray-400">"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
                                    <h2 className='text-gray-700 dark:text-gray-400 mt-4 font-light'>Posted on August 19, 2023</h2>
                                </a>

                            </div>
                        )}
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="w-[230px] border border-gray-200 m-auto text-sm rounded-full py-3 shadow-sm hover:bg-black hover:text-white transition ease-in-out delay-200">Load More Reviews</button>
                </div>
            </div>
        </>
    )
}

export default Tab_2