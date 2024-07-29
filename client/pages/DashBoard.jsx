import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

export default function DashBoard() {
    return (
        <div className="d-flex flex vh-100">
            <div className="position">
                <Sidebar />
            </div>
            <div className="overflow-y-scroll w-100">
            <Outlet />
            </div>
        </div >



    )
}
