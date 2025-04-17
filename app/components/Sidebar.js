import Image from "next/image";
import React from "react"

const Sidebar = (props) => {
  return (
    <div>
      <div className="w-5/6 mx-auto pt-14 pb-5">
        <div className="flex gap-4">
            <div className="w-3/4 pt-7">
                <p className="text-4xl font-bold pt-10">Best and Easiest Tools <br /> for Apps or Games</p>
                <p className="pt-4 text-gray-400 font-extralight text-sm">AppBrain helps Android developers succeed by offering easy tools for promoting and earning money from apps or games. With us, you can start quickly and manage everything yourself.</p>
                <div className="gap-4  flex pt-6">
                    <button className="rounded-2xl bg-transparent border border-black font-light px-2 py-1">SDK Documentation</button>
                    <button className="rounded-2xl bg-black text-white font-semibold px-3 py-2">Learn More</button>
                </div>
            </div>
            <div className="relative h-80 w-1/2 bg-blue-50 rounded-4xl">
                <Image src={'/teddy.png'} className="object-cover" fill/>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Sidebar;
