import Image from "next/image";
import React from "react"

const AppIntelligence = (props) => {
  return (
    <div className="w-5/6 mx-auto  pt-6">
      <div className="bg-blue-50 rounded-2xl ">
        <div className="px-15 py-15">
            <div className="text-3xl font-bold pt-2">App Intelligence</div>
            <div className="text-sm text-gray-400 pt-2">AppBrain App Intelligence tells you all about apps on Google Play. You can see how popular they are and find new ones easily.</div>
            <div className="pt-4">
                <input placeholder="Search for apps" className="bg-white border border-gray-300 py-1 px-2 w-72 rounded-2xl"/>
            </div>
        </div>
      </div>
    </div>
  )
};

export default AppIntelligence;
