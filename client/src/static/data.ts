import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
export const sideBarItem = [{
    active: 0,
    name: "DashBoard",
    icon: MdOutlineDashboard,
    type: "Single"
},
{
    active: 1,
    name: "User",
    icon: FaRegUser,
    type: "Single",
},
{
    active: 2,
    name: "Property Type",
    icon: IoHomeOutline,
    type: "Single"
}

]