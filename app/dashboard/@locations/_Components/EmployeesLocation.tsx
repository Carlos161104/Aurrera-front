import { API_URL, TOKEN_NAME } from "@/constants";
import { Employee } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import axios from "axios";
import { cookies } from "next/headers";

const EmployeesLocation = async ({ store }: { store: string }) => {
  const token = cookies().get(TOKEN_NAME)?.value;
  const { data } = await axios.get<Employee[]>(
    `${API_URL}/employees/location/${store}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data.map((employee) => {
    const fullName = employee.employeeName + " " + employee.employeeLastName;
    return (
      <Card className=" my-5 ">
        <CardHeader>
          <p className="w-full mx-5" ><b>{fullName}</b></p>
        </CardHeader>
        <Divider />
        <CardBody className="overflow-hidden">
        <p className="w-full mx-10" >Email: <b>{employee.employeeEmail}</b></p>
        <p className="w-full mx-10" >Telefono: <b>{employee.employeePhoto}</b></p>
        </CardBody>
      </Card>
    );
  });
};

export default EmployeesLocation;
