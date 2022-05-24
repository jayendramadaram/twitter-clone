import Image from 'next/image'
import React, { useState } from 'react'
import { RiGalleryLine } from 'react-icons/ri'
import { AiOutlineGif, AiFillCalendar } from 'react-icons/ai'
import { FaPollH } from 'react-icons/fa'
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs'

export default function TweetBox() {
  const [Input, setInput] = useState<string>('')
  return (
    <div>
      <div className=" flex  max-w-full items-center space-x-3 border-b border-gray-500 px-4">
        <Image
          src={'/avatar.jpg'}
          height={60}
          width={60}
          className="flex-grow-1  rounded-full"
        />
        <div className="w-full">
          <textarea
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            className="max-h-60 w-full  resize-none  border-b border-gray-500 bg-transparent py-7 font-bold outline-none"
            placeholder="WHATSS GOIN BUD"
          />
          <div className="flex items-center justify-between">
            <div className="flex space-x-5  px-4 py-6">
              <RiGalleryLine className="h-5 w-5 cursor-pointer text-twitter transition duration-200 hover:scale-150" />
              <AiFillCalendar className="h-5 w-5 cursor-pointer text-twitter transition duration-200 hover:scale-150" />
              <AiOutlineGif className="h-5 w-5 cursor-pointer text-twitter transition duration-200 hover:scale-150" />
              <FaPollH className="h-5 w-5 cursor-pointer text-twitter transition duration-200 hover:scale-150" />
              <BsFillEmojiHeartEyesFill className="h-5 w-5 cursor-pointer text-twitter transition duration-200 hover:scale-150" />
            </div>
            <button
              className="rounded-full bg-twitter py-3 px-9 disabled:opacity-70 "
              disabled={!Input}
            >
              {' '}
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
