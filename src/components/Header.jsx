import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiMoon } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";

export default function Header() {
  return (
    <>
    <nav className="flex px-6 justify-between items-center h-20 md:px-12">
    <div>
        <p className="uppercase font-bold">cine hall</p>
    </div>
    <ul className="flex gap-3">
        <li><IoIosNotifications /></li>
        <li><GiMoon /></li>
        <li><AiOutlineShoppingCart /></li>
    </ul>
   </nav>
    </>
  )
}
