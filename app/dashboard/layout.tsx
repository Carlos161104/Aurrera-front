import Headers from "./_components/Headre";
import Sidebar from "./_components/_sidebar/Sidebar";

const layoutDashboard = ({ children, count }: Readonly<{
    children: React.ReactNode;
    count: React.ReactNode;
}>) => {
    return (
        <div className=" bg-green-400">
            <Headers />
            <div className="flex flex-row items-center">
                <Sidebar />
                {children}
                {count}
            </div>

        </div>
    )
}

export default layoutDashboard
