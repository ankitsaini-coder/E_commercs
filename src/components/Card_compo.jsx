/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'


// const list = [
//   "New", "hot", "Gaming", "Coding", "Vlog", "Unboxcing", "Sport", "Gym"

// ]

function Card_compo() {
  const [show,setShow] = useState(false)
  // const [show,setShow] = useState(true)

  const ShowName =()=>{
    if(show == true){
      setShow(false)
    }else{
      setShow(true)
    }
  }
  return (
    <>
    {/* <button onClick={()=>setShow(!show)}>ankit</button>
    {
      show?<h1>hello</h1>:null
    } */}





    <div>
      <button onClick={ShowName}>click</button>
      {
        show && (<h1>hello</h1>)
      }
    </div>


     {/* <div className='mx-auto flex flex-col justify-center max-w-sm'>
      <h1 className='text-center text-2xl font-bold my-12'>
        Horizontal ScrollBar
      </h1>

      <div>
        <ul className='flex flex-row gap-4 overflow-y-auto'>
          {
            list.map((item) => (
              <li className='px-4 py-1 bg-gray-800 rounded-full text-white'>
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    </div>  */}
    
    </>
  )
}

export default Card_compo