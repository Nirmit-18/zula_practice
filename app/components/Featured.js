import Image from "next/image";
import React from "react";

const Featured = (props) => {
  const data = [
    {
      img: "/capybara.png",
      data1: "Capybara Simulator",
      data2: "TakeTopEntertainment",
      rating: "4.2",
    },
    {
      img: "/capybara.png",
      data1: "Capybara Simulator",
      data2: "TakeTopEntertainment",
      rating: "4.2",
    },
    {
      img: "/capybara.png",
      data1: "Capybara Simulator",
      data2: "TakeTopEntertainment",
      rating: "4.2",
    },
    {
      img: "/capybara.png",
      data1: "Capybara Simulator",
      data2: "TakeTopEntertainment",
      rating: "4.2",
    },
    {
      img: "/capybara.png",
      data1: "Capybara Simulator",
      data2: "TakeTopEntertainment",
      rating: "4.2",
    },
    {
      img: "/capybara.png",
      data1: "Capybara Simulator",
      data2: "TakeTopEntertainment",
      rating: "4.2",
    },
    {
      img: "/capybara.png",
      data1: "Capybara Simulator",
      data2: "TakeTopEntertainment",
      rating: "4.2",
    },
    {
      img: "/capybara.png",
      data1: "Capybara Simulator",
      data2: "TakeTopEntertainment",
      rating: "4.2",
    },
    {
      img: "/capybara.png",
      data1: "Capybara Simulator",
      data2: "TakeTopEntertainment",
      rating: "4.2",
    },
    {
      img: "/capybara.png",
      data1: "Capybara Simulator",
      data2: "TakeTopEntertainment",
      rating: "4.2",
    },
  ];

  return (
    <div className="w-5/6 mx-auto pt-7">
      <div>
        <div>   
          <p className="text-3xl font-bold">Featured by AppBrain</p>

         
          <div className="flex flex-col lg:flex-row pt-5 items-start gap-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-10 gap-12 gap-x-44 ">
              {data.map((item, index) => (
                <div className="" key={index}>
                  <div className="flex gap-2">
                    <div>
                      <Image
                        src={item.img}
                        width={50}
                        height={50}
                        alt="App icon"
                      />
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

            
            <div className="relative lg:w-1/2 w-full h-[400px]">
              <Image
                src={"/pspic.png"}
                fill
                alt="img"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
