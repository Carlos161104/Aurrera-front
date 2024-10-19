"use client";
import { API_URL } from "@/constants";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let authData: any = {};
    authData.userEmail = formData.get("userEmail");
    authData.userPassword = formData.get("userPassword");
    try {
      const { data } = await axios.post(`${API_URL}/auth/login`, {...authData}, {
        withCredentials: true,
      });
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <form
      className="bg-green-700 px-5 py-2 rounded-md"
      onSubmit={handleSubmit}
    >
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
        <Button color="primary" type="submit">
          Iniciar sesión
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
