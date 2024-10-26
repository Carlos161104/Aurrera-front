import { API_URL, TOKEN_NAME } from "@/constants";
import { Button, Input } from "@nextui-org/react";
import SelectManager from "./SelectManager";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";
import { updateLocation } from "@/actions/locations/update";

const FormUpdateLocation = async ({
  store,
}: {
  store: string | string[] | undefined;
}) => {
  if (store === undefined) return null;
  if (!store) return null;
  if (typeof store === "object") return null;

  const updateWithID = updateLocation.bind(null, store);

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
  let foundLocation = dataLocations.find(
    (location) => location.locationID === +store
  );
  let foundManager = responseManagers.find(
    (manager) => manager.managerID === foundLocation?.manager?.managerID
  );
  return (
    <form
      action={updateWithID}
      className="bg-green-200 py-2 px-4 flex-col gap-6 w-full rounded-lg"
    >
      <h1 className="text-xl text-center ">Registrar una nueva tienda</h1>
      <Input
        defaultValue={foundLocation?.locationName}
        label="Nombre"
        placeholder="Aurrera Centro"
        name="locationName"
      />
      <Input
        defaultValue={foundLocation?.locationAddress}
        label="Direccion"
        placeholder="Av.Vecente Guerror No.102"
        name="locationAddress"
      />
      <Input
        defaultValue={foundLocation?.locationLatLng[0].toString()}
        label="Latitud"
        placeholder="134"
        name="locationLat"
      />
      <Input
        defaultValue={foundLocation?.locationLatLng[1].toString()}
        label="Longitud"
        placeholder="-120"
        name="locationLng"
      />
      <SelectManager
        defaultManager={foundManager?.managerID.toString()}
        managers={responseManagers}
        locations={dataLocations}
      />

      <Button className="w-full" color="primary" type="submit">
        Actualizar
      </Button>
    </form>
  );
};

export default FormUpdateLocation;
