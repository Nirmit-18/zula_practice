import React from "react"

const Footer = (props) => {
  return (
    <div className="w-5/6 mx-auto pt-10">
      <div className="bg-blue-50">
        <div className="flex">
        <div className="w-3/4">
            <div className="grid sm:grid-cols-3 gap-x-3 text-gray-400 text-sm px-10 py-20">
                <ul>
                    <li></li>
                    <li>Seattle Sports</li>
                    <li>Large Print Bible</li>
                    <li>Droid TV</li>
                </ul>
                <ul>
                    <li>Android Stastics</li>
                    <li>Google play Developers Stats</li>
                    <li>Trending Android Apps</li>
                    <li>Top Popular Apps</li>
                </ul>
                <ul>
                    <li>Contacts</li>
                    <li>Blog</li>
                    <li>Documens</li>
                    <li>Articles</li>
                </ul>
            </div>
        </div>
        <div className="w-2/4 py-20 bg-amber-50">
        </div>
        </div>

      </div>
    </div>
  )
};

export default Footer;
