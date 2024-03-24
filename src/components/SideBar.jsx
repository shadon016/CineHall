import { AiFillFire } from "react-icons/ai";
import { GoFileSubmodule } from "react-icons/go";
import { IoMdCloudDownload } from "react-icons/io";
import { MdOutlineFavorite,MdWatchLater } from "react-icons/md";


export default function SideBar() {
  return (
    <div>
      
      <p className="flex gap-2 capitalize"><AiFillFire />trending</p>
      <p className="flex gap-2 capitalize"><GoFileSubmodule />new Release</p>
      <p className="flex gap-2 capitalize"><IoMdCloudDownload />comming soon</p>
      <p className="flex gap-2 capitalize"><MdOutlineFavorite />favourtes</p>
      <p className="flex gap-2 capitalize"><MdWatchLater />watch later</p>
    </div>
  )
}
