"use client";
import { Location } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const SelectLocation = ({
  locations,
  store,
}: {
  locations: Location[];
  store: string | string[] | undefined;
}) => {
  const router = useRouter();

  return (
    <Select
      label="Tienda"
      placeholder="Seleccionauna tienda"
      classNames={{
        mainWrapper: "hover:ring-2 ring-red-500 rounded-xl transition-all",
      }}
      onChange={(e) => {
        if (e.target.value === "0" || e.target.value === "")
          router.push(`/dashboard`);
        else router.push(`/dashboard?store=${e.target.value}`);
      }}
      selectedKeys={store ? store : "0"}
    >
      {locations.map((location: Location) => {
        return (
          <SelectItem key={location.locationID} value={location.locationID}>
            {location.locationName}
          </SelectItem>
        );
      })}
    </Select>
  );
};

export default SelectLocation;
