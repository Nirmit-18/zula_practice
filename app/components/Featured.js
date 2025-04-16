import Image from "next/image";
import React from "react"

const Featured = (props) => {
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

        },
        {
            img:'/capybara.png',
            data1:'Capybara Simulator',
            data2:'TakeTopEntertainment',
            rating:'4.2'

        }  ,     {
            img:'/capybara.png',
            data1:'Capybara Simulator',
            data2:'TakeTopEntertainment',
            rating:'4.2'

        },       {
            img:'/capybara.png',
            data1:'Capybara Simulator',
            data2:'TakeTopEntertainment',
            rating:'4.2'

        },       {
            img:'/capybara.png',
            data1:'Capybara Simulator',
            data2:'TakeTopEntertainment',
            rating:'4.2'

        }
    ]
  return (
    <div className="w-5/6 mx-auto pt-7">
        <div>
            <div>
                <p className="text-3xl font-bold">Featured by AppBrain</p>
                <div className="flex pt-5">
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
                        {data.map((item,index)=>(
                            <div className="" key={index}>
                                <div className="flex gap-2">
                                    <div>
                                        <Image src={item.img} width={50} height={10}/>
                                    </div>
                                    <div>
                                        <div className="text-sm">{item.data1}</div>
                                        <div className="text-xs">{item.data2}</div>
                                        <div className="text-xs text-yellow-600">{item.rating}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>

            </div>
        </div>
      
    </div>
  )
};

export default Featured;
