import React from "react";

const Home = () => {
    const date = new Date();
    const hour = date.getHours()
    const min = date.getMinutes() ;
  return (
    <div className="px-4 py-2 flex flex-col  items-center  w-full my-20 ">
      <div className=" border flex border-[.5px] gap-2 border-neutral-200 cursor-pointer transition duration-250 font-medium text-black max-w-fit text-xs px-2 py-1 rounded-full bg-neutral-400/20 hover:bg-neutral-400/33">
        <h1>Delaware franchise taxes are due by March 1</h1>
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-opacity=".5"
            stroke-width="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </div>
      <div className="text-center text-6xl mt-10 text-slate-900 tracking-tight font-medium ">
        Magically simplify <br />
        accounting and taxes
      </div>
      <p className="mt-4 text-center max-w-2xl text-gray-700">
        Automated bookkeeping. Effortless tax filing. Financial clarity. <br />{" "}
        Set up in 10 mins. Back to building by <span className="font-medium">{hour}<span className="animate-blink">:</span>{date.setMinutes(min + 10) && date.getMinutes().toString().padStart(2, "0")}.</span>
      </p>
      <div className="flex justify-center mt-6 gap-2">
        <button className="bg-[#2579f4] px-4 text-white text-sm font-medium text-shadow-lg py-2 rounded-lg shadow-xl  hover:cursor-pointer transition duration-200 hover:text-neutral-200">
          Get started
        </button>
        <button className="flex items-center text-sm font-medium gap-1 py-1 px-2 hover:bg-neutral-300/40 transition duration-200 cursor-pointer rounded-lg">
          <span>Pricing</span>
          <svg width="16" height="16" fill="none">
            <path
              stroke="#1E1F25"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-opacity=".5"
              stroke-width="1.25"
              d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
            ></path>
          </svg>
        </button>
        
      </div>
      <span className="text-xs text-neutral-400 mt-8 text-center">
        For US-based startups.
      </span>
    </div>
  );
};

export default Home;
