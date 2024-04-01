import React from 'react'
import iconThanks from '@/assets/images/icon-thank-you.svg'
import Image from 'next/image'
const page = () => {
  return (
    <div className="body flex justify-center bg-slate-200 h-[79vh] -mt-6 ">
    <div className="card bg-white w-[90%] h-[420px] rounded-xl -mt-[19%] ">
      <div className="h-[100%]  flex flex-col p-6 justify-evenly items-center text-center">
        <Image src={iconThanks} alt='thanks icon' width={60} />
        <h1 className="font-Ubuntu-Bold text-2xl -mt-7">Thank you!</h1>
        <p className="-mt-7 w-72 text-slate-400">
         Thanks for confirming your subscription!
         We hope you have fun using our 
         platform. if you have need support,
         pleaas feel free to email us at  
         support@gmail.com.
        </p>
      </div>
     
    </div>
  </div>
  )
}

export default page