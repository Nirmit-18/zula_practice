import React from "react"

const Cards = (props) => {
    const data=[
        {
            info:'fa-solid fa-rocket',
            info:'Boost your App',
            info1:'Boost your app’s growth with our global audience',
        },

        {
            info:'fa-solid fa-rocket',
            info:'Best Price',
            info1:'Boost your app’s growth with our global audience',
        },

        {
            info:'fa-solid fa-rocket',
            info:'High Retention',
            info1:'Boost your app’s growth with our global audience',
        },

        {
            info:'fa-solid fa-rocket',
            info:'Boost your App',
            info1:'Boost your app’s growth with our global audience',
        },
        {
            info:'fa-solid fa-rocket',
            info:'Boost your App',
            info1:'Boost your app’s growth with our global audience',
        },
        {
            info:'fa-solid fa-rocket',
            info:'Boost your App',
            info1:'Boost your app’s growth with our global audience',
        },
    ]
  return (
    <div className="pt-10 w-5/6 mx-auto bg-blue-50 rounded-3xl pb-3">
      <div>
        <p className="text-center text-4xl font-semibold pt-10">AppBrain Promote</p>
        <p className="text-gray-300 text-sm text-center pt-3">The easiest way to promote your Android App. Increase your Android app’s users by promoting it on our network.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 py-5">
        {data.map((item,index)=>(
            <div key={index} className="pt-20 pb-6 m-8 px-3 rounded-4xl bg-white">
                <div>{item.pic}</div>
                <div className="text-2xl font-semibold">{item.info}</div>
                <div className="pt-2 text-gray-400">{item.info1}</div>
            </div>
        ))}

      </div>
      <div className="mx-auto flex justify-center items-center"><button className="border border-black px-2 py-1 bg-transparent  rounded-full">More Info</button></div>
    </div>
  )
};

export default Cards;
