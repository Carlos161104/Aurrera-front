import { createdLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { Button, Input } from "@nextui-org/react";
import SelectManager from "./SelectManager";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";

const FormNewLocation = async ({
  store,
}: {
  store: string | string[] | undefined;
}) => {
  if (store) return null;

  const response = await fetch(`${API_URL}/managers`, {
    headers: {
      ...AuthHeaders(),
    },
    next: {
      tags: ["dashboard:managers"],
    },
  });

  const responseManagers: Manager[] = await response.json();
  const responseLoc = await fetch(`${API_URL}/locations`, {
    headers: {
      ...AuthHeaders(),
    },
    next: {
      tags: ["dashboard:locations", "dashboard:locations:managers"],
    },
  });
  const dataLocations: Location[] = await responseLoc.json();
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
      <SelectManager managers={responseManagers} locations={dataLocations} />

      <Button className="w-full" color="primary" type="submit">
        Subir
      </Button>
    </form>
  );
};

export default FormNewLocation;
