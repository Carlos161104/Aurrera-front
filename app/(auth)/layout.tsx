

const AuthLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div
            className="bg-green-400 w-screen h-screen overflow-hidden grid"
        >
            <div className="place-content-center place-self-center">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
