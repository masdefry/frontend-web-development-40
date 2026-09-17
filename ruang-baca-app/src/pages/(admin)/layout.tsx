import { Outlet } from "react-router";
import Sidebar from "../../components/(admin)/Sidebar";

export default function AdminLayout(){
    return(
        <>
            <div className="grid grid-cols-[20%_80%]">
                <div><Sidebar /></div>
                <div><Outlet /></div>
            </div>
        </>
    )
}