import { API_URL, TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import axios from "axios";
import { cookies } from "next/headers";
import Link from "next/link";

const LocationCard = async ({
  store,
}: {
  store: string | string[] | undefined;
}) => {
  if (!store) return null;
  const token = cookies().get(TOKEN_NAME)?.value;
  const { data } = await axios.get<Location>(`${API_URL}/locations/${store}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return (
    <Card className="w-full">
      <CardHeader>
        <p className="w-full">
          {" "}
          <b>{data.locationName}</b>
        </p>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="w-full">
          Manager:{" "}
          <b>
            <Link href={{ pathname: `/dashboard/managers` }}>
              {data.manager?.managerFullName}
            </Link>
          </b>
        </p>
      </CardBody>
    </Card>
  );
};

export default LocationCard;
