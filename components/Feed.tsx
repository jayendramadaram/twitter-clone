import { BiArrowToTop } from 'react-icons/bi'
import TweetBox from './TweetBox'

export default function Feed() {
  return (
    <div className="col-span-7 border-x-2 border-gray-600  lg:col-span-5">
      <div
        className="sticky flex items-center justify-between rounded-md   border-gray-100 bg-gray-600 bg-opacity-30 bg-clip-padding py-4
      px-3 outline-none 
      backdrop-blur-sm
      backdrop-filter
      
    "
      >
        <h3>Home</h3>
        <BiArrowToTop className="mt-0 h-8 w-8 items-center text-twitter transition duration-200 hover:scale-150" />
      </div>
      <TweetBox />
    </div>
  )
}
