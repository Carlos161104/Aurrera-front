import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import IdCard from "./_components/IdCard";
import DeleteManagerButton from "./_components/DeleteManagerButton";

const ManagerPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const response = await fetch(`${API_URL}/managers/${params.id}`, {
    headers: {
      ...AuthHeaders(),
    },
    next: {
      tags: [`dashboard:managers:${params.id}`, "dashboard:managers"],
    },
  });
  const data: Manager = await response.json();
  console.log(data);
  return (
    <div className="flex flex-col gap-10 flex-grow-0 items-center justify-center">
      <IdCard manager={data} />
      <div className="bg-white shadow-md rounded-md px-10 py-2">
        <DeleteManagerButton managerId={data.managerID} />
      </div>
    </div>
  );
};

export default ManagerPage;
