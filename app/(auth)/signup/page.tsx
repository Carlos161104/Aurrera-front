import { Button, Input } from "@nextui-org/react"
import Link from "next/link"

const SignUpPage = () => {
    return (
        <div className="border-orange-500 py-2 rounded-md">
            <p className="text-2xl my-4">Registrarse en la plataforma</p>

            <div className="flex flex-col gap-2 my-10 items-center">
                <Input label="Emal" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" type="password" isRequired={true} size="sm" />
                <Input label="Repetir contraseña" type="password" isRequired={true} size="sm" />

            </div>
            <div className="flex flex-col items-center gap-2">
                <Button color="primary">Registrarse</Button>
                <p>Ya tienes una cuenta?<Link href="./login" className="text-blue-500 underline">Iniciar sesion</Link></p>
            </div>

        </div>
    )
}

export default SignUpPage
