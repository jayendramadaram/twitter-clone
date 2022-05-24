import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { AiOutlineSearch } from 'react-icons/ai'
export default function Right() {
  return (
    <div className="col-span-2 hidden  flex-col space-y-4 p-3 lg:inline-flex">
      <div className="flex items-center space-x-4 rounded-full bg-gray-700 py-2 px-2">
        <AiOutlineSearch className="h-6 w-6" />
        <input
          placeholder="Search STUFF !!"
          className="bg-transparent text-gray-400 outline-none"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="jayendra__02"
        options={{ height: 800 }}
      />
    </div>
  )
}
