import Image from "next/image";
import React from "react"

const Topdeals = (props) => {
    const data=[
        {
            img:'/capybara.png',
            data1:'Capybara Simulator',
            data2:'TakeTopEntertainment',
            rating:'4.2'

        },        {
            img:'/capybara.png',
            data1:'Capybara Simulator',
            data2:'TakeTopEntertainment',
            rating:'4.2'

        },        {
            img:'/capybara.png',
            data1:'Capybara Simulator',
            data2:'TakeTopEntertainment',
            rating:'4.2'

        },        {
            img:'/capybara.png',
            data1:'Capybara Simulator',
            data2:'TakeTopEntertainment',
            rating:'4.2'

        },        {
            img:'/capybara.png',
            data1:'Capybara Simulator',
            data2:'TakeTopEntertainment',
            rating:'4.2'

        },        {
            img:'/capybara.png',
            data1:'Capybara Simulator',
            data2:'TakeTopEntertainment',
            rating:'4.2'

        }
    ]
  return (
    <div className="w-5/6 mx-auto pt-7">
        <div className="flex justify-between  pt-10">
        <div className=" text-3xl font-bold">Top Apps Deals</div>
        <button className="bg-transparent border border-gray-200 py-2 px-4 rounded-full text-sm">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
            {data.map((item,index)=>(
                <div key={index} >
                    <div className="flex gap-2 py-2.5">
                    <Image src={item.img} width={50} height={10} />
                    <div>
                        <div className="font-semibold text-sm">
                            {item.data1}
                        </div>
                        <div className="text-xs font-light">
                            {item.data2}
                        </div>
                        <div className="text-xs text-yellow-600">
                            {item.rating}
                        </div>
                    </div>
                </div>
        </div>
                
            ))}
        </div>
    </div>
  )
};

export default Topdeals;
