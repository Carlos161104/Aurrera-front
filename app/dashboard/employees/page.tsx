import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import EmployeeCard from "./_components/EmployeeCard";
import EmployeePhotoCard from "./_components/EmployeePhotoCard";

const EmployeesPage = async () => {
  const response = await fetch(`${API_URL}/employees`, {
    headers: {
      ...AuthHeaders(),
    },
  });

  const employees: Employee[] = await response.json();
  return (
    <div>
      {employees.map((employee: Employee) => {
        if(employee.employeePhoto !== null) {
          return <EmployeePhotoCard key={employee.employeeId} employee={employee} />;
        }else {
          return <EmployeeCard key={employee.employeeId} employee={employee}/>
        }
      })}
    </div>
  );
};

export default EmployeesPage;
