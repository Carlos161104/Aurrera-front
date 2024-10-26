import { createdLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";

const FormNewLocation = async ({ store }: {store: string |string[] | undefined}) => {
  if (store) return null;

  const token = cookies().get(TOKEN_NAME)?.value;
  const responseManagers = await axios.get(`${API_URL}/managers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseLocations = await axios.get(`${API_URL}/locations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return (
    <form
      action={createdLocation}
      className="bg-green-200 py-2 px-4 flex-col gap-6 w-full rounded-lg"
    >
      <h1 className="text-xl text-center ">Registrar una nueva tienda</h1>
      <Input label="Nombre" placeholder="Aurrera Centro" name="locationName" />
      <Input
        label="Direccion"
        placeholder="Av.Vecente Guerror No.102"
        name="locationAddress"
      />
      <Input label="Latitud" placeholder="134" name="locationLat" />
      <Input label="Longitud" placeholder="-120" name="locationLng" />
      <SelectManager
        managers={responseManagers.data}
        locations={responseLocations.data}
      />

      <Button className="w-full" color="primary" type="submit">
        Subir
      </Button>
    </form>
  );
};

export default FormNewLocation;
