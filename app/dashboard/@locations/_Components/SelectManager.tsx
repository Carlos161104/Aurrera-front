"use client";

import { Location, Manager } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";

interface SelectManagerProps {
  managers: Manager[];
  locations: Location[];
  defaultManager?: string;
}

const SelectManager = ({
  managers,
  locations,
  defaultManager = undefined,
}: SelectManagerProps) => {

  const disableKeys = locations
    .map((location: Location) => {
      if (location.manager?.managerID !== defaultManager) return location.manager?.managerID;
    })
    .filter((managerID) => managerID !== undefined);
  return (
    <Select
      defaultSelectedKeys={defaultManager !== undefined ? [defaultManager] : []}
      label="Manager"
      name="manager"
      disabledKeys={disableKeys}
    >
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
