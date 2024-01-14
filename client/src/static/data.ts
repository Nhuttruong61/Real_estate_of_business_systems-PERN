import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
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
export const itemSettings = [
    {
        key: "Logout",
        name: "Logout",
        icon: CiLogout,
    }, {
        key: "Go Home",
        name: "Go Home",
        icon: IoIosLogOut,
    }]
