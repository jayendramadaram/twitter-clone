import { BsTwitter, BsFillBookmarkFill } from 'react-icons/bs'
import Side from './Side'
import {
  AiFillHome,
  AiOutlineUnorderedList,
  AiFillBell,
  AiOutlineMail,
} from 'react-icons/ai'
import { FaHashtag } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { VscSignIn } from 'react-icons/vsc'
import { HiDotsCircleHorizontal } from 'react-icons/hi'

export default function Sidebar() {
  return (
    <div className="col-span-2 flex flex-col items-center space-y-2 md:items-start">
      <BsTwitter className=" mx-3 h-8 w-8 text-blue-500" />
      {/* sidebar */}
      <Side Icons={AiFillHome} title="Home" />
      <Side Icons={FaHashtag} title="Explore" />
      <Side Icons={AiFillBell} title="Notifications" />
      <Side Icons={AiOutlineUnorderedList} title="List" />
      <Side Icons={AiOutlineMail} title="Messages" />
      <Side Icons={CgProfile} title="Profile" />
      <Side Icons={BsFillBookmarkFill} title="Bookmarks" />
      <Side Icons={VscSignIn} title="Sign in" />
      <Side Icons={HiDotsCircleHorizontal} title="More" />
    </div>
  )
}
