"use server";

import { API_URL, TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const updateLocation = async (store: string, formData: FormData): Promise<void> => {
  let location: any = {};
  let locationLatLng: any = [0, 0];

  for (const key of formData.keys()) {
    const value = formData.get(key);
    if (value) {
      if (key === "locationLat") {
        locationLatLng[0] = +value;
      } else if (key == "locationLng") {
        locationLatLng[1] = +value;
      } else {
        location[key] = value;
      }
    }
  }

  location.locationLatLng = locationLatLng;

  const response = await fetch(`${API_URL}/locations/${store}`, {
    method: "PATCH",
    body: JSON.stringify(location),
    headers: {
      "content-type": "application/json",
      ...AuthHeaders(),
    },
  });

  const data: Location = await response.json();
  if (response.status === 200) {
    revalidateTag("dashboard:locations");
    revalidateTag(`dashboard:locations:${store}`);
    redirect(`/dashboard?store:${data.locationID}`);
  }

  return;
};