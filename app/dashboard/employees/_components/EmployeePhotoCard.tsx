import { Employee } from "@/entities";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import Link from "next/link";

export default function EmployeePhotoCard({
  employee,
}: {
  employee: Employee;
}) {
  return (
    <Card className="size-72 max-h-72 isFooterBlurred">
      <CardHeader className="absolute top-0 bg-black bg-opacity-25 z-10">
        <h1 className="font-bold text-xl text-white drop-shadow-sm">
          {employee.employeeName + " " + employee.employeeLastName}
        </h1>
      </CardHeader>
      <Divider />
      <Image
        className="z-0"
        src={employee.employeePhoto}
        alt="Employee photo"
        classNames={{ img: "size-72" }}
      />
      <CardFooter className="absolute bottom-0 py-2 h-14">
        <Link href={`/dashboard/employees/${employee.employeeId}`}>
          <Button variant="ghost">Actualizar datos</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
