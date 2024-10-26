"use client";

import { Location, Manager } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";

const SelectManager = ({
  managers,
  locations,
}: {
  managers: Manager[];
  locations: Location[];
}) => {

  const disableKeys = locations.map((location: Location) => {
    return location.manager?.managerID
  }).filter((managerID) => managerID !== undefined)

  return (
    <Select label="Manager" name="manager" disabledKeys={disableKeys}>
      {managers.map((manager: Manager) => {
        return (
          <SelectItem key={manager.managerID}>
            {manager.managerFullName}
          </SelectItem>
        );
      })}
    </Select>
  );
};

export default SelectManager;
