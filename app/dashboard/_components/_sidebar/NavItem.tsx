"use client"; // Esto nos ayuda a hacer que el componente se renderice en el cliente y no en el servidor.
// Lo que nos permite interactuar con el DOM
import Link from "next/link"
import { usePathname } from "next/navigation";
import { ReactNode } from "react"

interface NavItemProps {
    icon: ReactNode,
    path: string
}

export const NavItems = ({ icon, path }: NavItemProps) => {
    const pathName = usePathname(); // Obtener el path del  navegador con el  DOM
    return (
        <Link href={path} className="w-full justify-center">
            <span className={pathName == path ? "w-10/12 bg-green-300 flex justify-center rounded-md transition-all py-2" : "transition-all w-10/12 py-2"}> {icon}</span>
        </Link>
    )
}