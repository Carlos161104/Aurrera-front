import { Manager } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

const IdCard = ({ manager }: { manager: Manager }) => {
  return (
    <Card className="mx-20 my-2 bg-yellow-300 text-center">
      <CardHeader>
        <p className="w-full text-xl">
          <b>{manager.managerFullName}</b>
        </p>
      </CardHeader>
      <Divider />
      <CardBody className="items-center justify-center">
        <div className="flex flex-row flex-grow-0">
          <p className="w-full">
            Email: <b>{manager.managerEmail}</b>
          </p>
          <p className="w-full">
            Telefono: <b>{manager.managerPhone}</b>
          </p>
        </div>

        {manager.location ? (
          <p className="w-full">
            Tienda:{" "}
            <Link
              href={{
                pathname: `dashboard`,
                query: {
                    store : manager?.location?.locationID
                }
              }}
            >
              <b>{manager.location.locationName}</b>
            </Link>
          </p>
        ) : (
          /*Aqui deve de ir el mapa */
          <p>No se esta asociado a ninguan tienda</p>
        )}
      </CardBody>
    </Card>
  );
};

export default IdCard;
