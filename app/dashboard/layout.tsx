import Headers from "./_components/Headre";
import Sidebar from "./_components/_sidebar/Sidebar";

const layoutDashboard = ({ children, locations }: Readonly<{
    children: React.ReactNode;
    locations: React.ReactNode;
}>) => {
    return (
        <div className=" bg-green-400">
            <Headers />
            <div className="flex flex-row items-center">
                <Sidebar />
                {children}
                {locations}
            </div>

        </div>
    )
}

export default layoutDashboard
