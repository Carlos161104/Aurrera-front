"use client";
import { API_URL } from "@/constants";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const [submit, setSubmit] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    setSubmit(true);
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    let authData: any = {};
    authData.userEmail = formData.get("userEmail");
    authData.userPassword = formData.get("userPassword");
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(authData),
        credentials: "include",
      });
      console.log(response.status);
      if (response.status >= 200 && response.status < 300) {
        router.push("/dashboard");
      }
      setSubmit(false);
    } catch (error) {
      console.error("Error:", error);
      setSubmit(false);
    }
  };

  return (
    <form className="bg-green-700 px-5 py-2 rounded-md" onSubmit={handleSubmit}>
      <p className="text-2xl my-4">Registrarse en la plataforma</p>
      <div className="flex flex-col gap-2 my-10 items-center">
        <Input
          name="userEmail"
          label="Email"
          type="email"
          isRequired
          size="sm"
        />
        <Input
          name="userPassword"
          label="Contraseña"
          type="password"
          isRequired
          size="sm"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button color="primary" type="submit" disabled={submit}>
          {submit ? "Enviando..." : "Iniciar sesión"}
        </Button>
        <p>
          No tienes cuenta?
          <Link href="./signup" className="text-white underline">
            Regístrate
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginPage;
