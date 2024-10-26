import { API_URL, TOKEN_NAME } from "@/constants";
import { Employee } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

const EmployeesLocation = async ({ store }: { store: string }) => {
  const response = await fetch(`${API_URL}/employees/location/${store}`, {
    method: "GET",
    headers: {
      ...AuthHeaders(),
    },
    next: {
      tags:['dashboard:locations:employees']
    }
  });
  const data: Employee[] = await response.json();
  return data?.map((employee: Employee) => {
    const fullName = employee.employeeName + " " + employee.employeeLastName;
    return (
      <Card className=" my-5 ">
        <CardHeader>
          <p className="w-full mx-5">
            <b>{fullName}</b>
          </p>
        </CardHeader>
        <Divider />
        <CardBody className="overflow-hidden">
          <p className="w-full mx-10">
            Email: <b>{employee.employeeEmail}</b>
          </p>
          <p className="w-full mx-10">
            Telefono: <b>{employee.employeePhoto}</b>
          </p>
        </CardBody>
      </Card>
    );
  });
};

export default EmployeesLocation;
