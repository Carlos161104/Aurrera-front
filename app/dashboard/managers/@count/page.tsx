import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Card } from "@nextui-org/react";
import React from "react";

const CountManagersPage = async () => {
  const response = await fetch(`${API_URL}/managers`, {
    headers: {
      ...AuthHeaders(),
    },
    next: {
      tags: ["dashboard:managers"],
    },
  });
  const data: Manager[] = await response.json();

  const countNoStore = data.filter((manager: Manager) => {
    !manager.location;
  });

  let max: number = 0;
  let salary: number = 0;
  data.forEach((manager: Manager) => {
    if (manager.salary > max) {
      max = manager.salary;
    }
    salary += manager.salary;
  });
  
  return (
    <Card className="font-bold w-fit px-2 py-4 text-center">
      <h1>
        Hay {data.length} manager{data.length > 1 ? "s" : ""}
      </h1>
      <h1>
        Hay {countNoStore.length} manager{countNoStore.length > 1 ? "s" : ""}{" "}
        sin tienda
      </h1>
      <h1>El salario maximo es de ${max} </h1>
      <h1>El salario promedio es de ${salary/data.length}</h1>
    </Card>
  );
};

export default CountManagersPage;
