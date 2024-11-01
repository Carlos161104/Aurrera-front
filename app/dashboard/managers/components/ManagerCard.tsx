import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

const ManagerCards = async () => {
  const response = await fetch(`${API_URL}/managers`, {
    method: "GET",
    headers: {
      ...AuthHeaders(),
    },
    next: {
      tags: ["dashboard:managers"],
    },
  });
  const data: Manager[] = await response.json();
  return data?.map((manager: Manager) => {
    return (
      <Link
        href={{ pathname: `/dashboard/managers/${manager.managerID}` }}
        color="foreground"
        className="w-full"
      >
        <Card className="my-5 w-full max-w-full hover:scale-105 hover:bg-red-500">
          <CardHeader>
            <p className="w-full mx-5">
              <b>{manager.managerFullName}</b>
            </p>
          </CardHeader>
          <Divider />
          <CardBody className="overflow-hidden">
            <p className="w-full mx-10">
              Email: <b>{manager.managerEmail}</b>
            </p>
            <p className="w-full mx-10">
              Teléfono: <b>{manager.managerPhone}</b>
            </p>
          </CardBody>
        </Card>
      </Link>
    );
  });
};

export default ManagerCards;
