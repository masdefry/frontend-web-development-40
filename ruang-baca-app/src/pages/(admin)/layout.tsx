import { Outlet } from "react-router";

export default function AdminLayout(){
    return(
        <>
            <div className="grid grid-cols-[20%_80%]">
                <div>Sidebar</div>
                <div><Outlet /></div>
            </div>
        </>
    )
}