/* eslint-disable react/jsx-key */
import { Tab, TabGroup, TabList, TabPanels } from '@headlessui/react'
import Top_bottom from "../assets/img/Top_bottom.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Happy from "../assets/img/Happy_stars.png"
import Right_icon from "../assets/img/Right.png"



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
]

// eslint-disable-next-line no-unused-vars
const Tabs = (item) => {
  return (
    <div className="flex h-screen w-full justify-center pt-24 px-4 bg-red-900">
      <div className="w-full max-w-[1240px]">
        <TabGroup>
          <TabList className="flex justify-around">
            {data.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-2 px-6 text-2xl/6 font-light text-black focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black"
              >
                {name}
              </Tab>
            ))}
          </TabList>
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

          <TabPanels className="mt-0">
            <div className='flex justify-between'>
              <div className="w-full">
                <div className='w-10/12 m-auto'>
                  <div className='flex justify-between max-w-[800px]'>
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
                    
                  </div>
                </div>
              </div>
            </div>
          </TabPanels>

        </TabGroup>
        <div className="text-center mt-8">
          <button className="w-[230px] border border-gray-200 m-auto text-sm rounded-full py-2 shadow-sm">View All</button>
        </div>
      </div>
    </div>
  )
}

export default Tabs;
