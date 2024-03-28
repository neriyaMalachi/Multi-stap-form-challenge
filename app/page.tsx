import Image from "next/image";

export default function Home() {
  return (
    <div className="">
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
      <div className="body flex justify-center bg-slate-200 h-[550px] ">
        <div className="card bg-white w-[90%] h-[500px] rounded-xl -mt-[25%]">
          <div className="h-[30%]  flex flex-col p-6">

          <h1 className="font-Ubuntu-Bold text-2xl">Personal info</h1>
          <p className="mt-4 text-slate-400">Please provide your name, email addres, and phne number.</p>
          </div>
          <div className="inputs flex flex-col justify-evenly items-center h-[60%]">

          <div className="input">
            <p>Name</p>
            <input type="text" placeholder="e.g Stefhan King" className="border border-zinc-500 p-2 rounded-md w-[300px]"/>

          </div>
          <div className="input">
            <p>Email Address</p>
            <input type="text" placeholder="e.g Stefhanking@lorem.com" className="border border-zinc-500 p-2 rounded-md w-[300px]"/>

          </div>
          <div className="input">
            <p>Phone Number</p>
            <input type="text" placeholder="e.g.+1 234 567 890" className="border border-zinc-500 p-2 rounded-md w-[300px]"/>

          </div>
          </div>

        </div>
      </div>
      <div className="futer flex justify-end items-center h-24 w-[95%]">
        <button className="button text-white p-3 rounded-md font-Ubuntu-Bold  " >Next Step</button>
      </div>
    </div>
  );
}
