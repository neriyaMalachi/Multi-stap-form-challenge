import React from 'react'
import '@/globals.css'


const NavBar = () => {
  return (
    <div className="navigation  w-[100%] h-[200px] flex justify-center items-center ">
        <div className="flex justify-evenly -mt-20 w-[50%]  ">
          <button className="buttonForNavigation border border-white rounded-full h-9 w-9 text-white font-bold text-center   hover:bg-white hover:text-purple-500">
            1
          </button>
          <button className="buttonForNavigation border border-white rounded-full h-9 w-9 text-white font-bold text-center   hover:bg-white hover:text-purple-500">
            2
          </button>
          <button className="buttonForNavigation border border-white rounded-full h-9 w-9 text-white font-bold text-center   hover:bg-white hover:text-purple-500">
            3
          </button>
          <button className="buttonForNavigation border border-white rounded-full h-9 w-9 text-white font-bold text-center   hover:bg-white hover:text-purple-500">
            4
          </button>
        </div>
      </div>
  )
}

export default NavBar