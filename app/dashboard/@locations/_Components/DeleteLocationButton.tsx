import { deleteLocation } from "@/actions/locations/delete";
import { Button } from "@nextui-org/react";

const DeleteLocationButton = ({ store }: { store: string | string[] | undefined}) => {
  if (!store) return null;
  return (
    <form action={deleteLocation}>
      <Button type="submit" name="deleteValue" value={store} color="danger">Borrar Tienda</Button>
    </form>
  );
};

export default DeleteLocationButton;
