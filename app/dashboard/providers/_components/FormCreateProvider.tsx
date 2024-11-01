import createProvider from "@/actions/providers/create";
import { Button, Input } from "@nextui-org/react";

export default function FormCreateProvider() {
  return (
    <form action={createProvider} className="flex flex-col gap-2 flex-grow-0">
      <h1 className="text-2xl text-white">Crear Proveedor </h1>
      <Input label="Nombre" placeholder="Peps" name="providerName" />
      <Input
        label="Correo"
        placeholder="ejemplo@ejemplo.com"
        name="providerEmail"
      />
      <Input label="Número" placeholder="5454545454" name="providerPhoneNumber" />
      <Button color="primary" type="submit">
        {" "}
        Creatr el provedor{" "}
      </Button>
    </form>
  );
}
