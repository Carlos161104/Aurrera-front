import Image from "next/image";

const Headers = () => {
    return (
        <div className="w-screen h-[10vh] bg-green-800 flex-row items-center px-10">
            <Image src="Aurrera_Logo.svg" width={100} height={0} alt="Logo..." draggable={false} />
        </div>
    );
}

export default Headers;