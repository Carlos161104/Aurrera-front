import { API_URL, TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

const LocationCard = async ({
  store,
}: {
  store: string | string[] | undefined;
}) => {
  if (!store) return null;
  const authHeaders = await AuthHeaders();
  const response = await fetch(`${API_URL}/locations/${store}`, {
    headers: {
      ...authHeaders,
    },
    next: {
      tags: ["dashboard:locations", `dashboard:locations:${store}`],
    },
  });
  const data: Location = await response.json();
  return (
    <Card className="w-full">
      <CardHeader>
        <p className="w-full">
          {" "}
          <b>{data.locationName}</b>
        </p>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col w-full items-center">
        <p className="w-full">
          Manager:{" "}
          <b>
            <Link href={{ pathname: `/dashboard/managers` }}>
              {data.manager?.managerFullName}
            </Link>
          </b>
        </p>
        {
          //Aqui se deve de poner el mapa cuando se tenga la ubicacion de la tienda
        }
      </CardBody>
    </Card>
  );
};

export default LocationCard;
