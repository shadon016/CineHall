import SideBar from "./SideBar";
import MoiveList from "./MoiveList";

export default function Content() {
  return (
    <div className="flex gap-12 px-6 md:gap-16 md:px-12">
        <SideBar />
        <MoiveList />
    </div>
  )
}
