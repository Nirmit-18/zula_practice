import React from "react"
import Image from "next/image";


const HomePage = (props) => {
  return (
    <div>
            <div className=" flex-col  w-5/6 mx-auto py-28 px-4 flex items-center justify-center rounded-4xl" style={{ backgroundColor: "#f6f8fb", 
      }}>
        <p className="text-blue-600  sm:text-5xl text-4xl font-bold  text-center">Welcome to Zula</p>
        <p className="text-gray-400 pt-5 text-center ">The best place to download Andriod app</p>
      </div>

    <div className="w-5/6 mx-auto pt-8 relative  min-h-[80vh]">
      <div className="flex justify-between ">
        <p className="font-bold text-3xl ">Hot Apps</p>
        <button className="bg-transparent border border-gray-200 py-2 px-4 rounded-full text-sm">View All</button>
      </div>
      <div className="flex pt-6 h-1/4 gap-2">
        <div className="w-2/5  relative"><Image src={"/spacecleaner.png"} fill  className="object-cover object-right-top rounded-2xl"/></div>
        <div className="w-3/5 gap-2">
        <div className="relative h-96 "><Image src={"/boat.png"} fill  className="object-cover rounded-2xl object-bottom" alt="boat"/></div>
        <div className="flex h-full pt-2 gap-2">
          <div className="w-1/2 relative h-44 ">
          <Image src={"/blockgame.png"} fill  className="object-cover object-bottom rounded-2xl" alt="boat"/>
          </div>
          <div className="w-1/2 relative h-44">
          <Image src={"/topwar.png"} fill  className="object-cover rounded-2xl object-bottom" alt="boat"/>
          </div>
        </div>
        </div>
        
      </div>
    </div>
    </div>
  )
};

export default HomePage;
