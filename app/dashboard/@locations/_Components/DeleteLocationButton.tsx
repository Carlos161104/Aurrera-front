import { deleteLocation } from "@/actions/locations/delete";
import { Button } from "@nextui-org/react";
import { LuTrash } from "react-icons/lu";

const DeleteLocationButton = ({ store }: { store: string | string[] | undefined}) => {
  if (!store) return null;
  return (
    <form action={deleteLocation} className="p-2">
      <Button type="submit" name="deleteValue" value={store} color="danger"><LuTrash size={20}/> Eliminar</Button>
    </form>
  );
};

export default DeleteLocationButton;
