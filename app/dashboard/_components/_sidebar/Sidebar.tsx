import { LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu"
import { NavItems } from "./NavItem"

const Sidebar = () => {
  return (
    <nav className="flex w-[10vw] h-[90vh] bg-green-700 flex-col items-center py-20 justify-center gap-10">
      <NavItems icon={<LuStore className="text-4xl" />} path="/dashboard" />
      <NavItems icon={<LuTruck className="text-4xl" />} path="/dashboard/providers" />
      <NavItems icon={<LuWheat className="text-4xl" />} path="/dashboard/products" />
      <NavItems icon={<LuUser className="text-4xl" />} path="/dashboard/managers" />
      <NavItems icon={<LuUsers className="text-4xl" />} path="/dashboard/employees" />
    </nav>
  )
}

export default Sidebar
