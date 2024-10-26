'use client'
import { usePathname } from "next/navigation";
import Headers from "./_components/Headre";
import Sidebar from "./_components/_sidebar/Sidebar";

const layoutDashboard = ({ children, locations }: Readonly<{
    children: React.ReactNode;
    locations: React.ReactNode;
}>) => {

    const path = usePathname()
    return (
        <div className=" bg-green-400">
            <Headers />
            <div className="flex flex-row items-center">
                <Sidebar />
                {children}
                {path === "/dashboard"? locations : null}
            </div>

        </div>
    )
}

export default layoutDashboard
