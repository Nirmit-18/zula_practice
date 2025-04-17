import Image from "next/image";
import React from "react"

const Topapps = (props) => {

    const data=[
        { pic: '/fight.png',
          info:'Only Go up parkour simulator',
          info2:'Big Clock Studio'
        },
        { pic: '/fight.png' ,
         info:'Shape Change:Shifting Race',
         info2:'Big Clock Studio'

        },
        { pic: '/fight.png',
         info:' Yuzu Emulator',
         info2:'Big Clock Studio'
         }
    ]


  return (
    <div className="w-5/6  mx-auto">
        <div className="flex justify-between  pt-10">
        <div className=" text-3xl font-bold">Top New Apps</div>
        <button className="bg-transparent border border-gray-200 py-2 px-4 rounded-full text-sm">View All</button>
        </div>

        <div className="sm:flex block w-full gap-4 pt-5 justify-start">
        {data.map((item, index) => (
        <div key={index} className="w-full gap-4">
          <Image
            src={item.pic}
            width={250}
            height={250}
            className="rounded-2xl pb-3 w-full object-cover "
            alt={item.pic}
          />
          <div className="flex justify-between">
          <div className="text-sm">{item.info}</div>
          <button className="bg-black text-white font-semibold px-2 py-1 rounded-2xl text-xs">Get</button>
          </div>
          <div className="text-xs">{item.info2}</div>
        </div>
      ))}

        </div>

    </div>
  )
};

export default Topapps;
