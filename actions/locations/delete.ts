"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const deleteLocation = (formData: FormData) => {
  const locationID = formData.get("deleteValue");
  if (!locationID) return;

  fetch(`${API_URL}/location/${locationID}`, {
    method: "DELETE",
    headers: {
      ...AuthHeaders(),
    },
  });

  revalidateTag("dashboard:locations");
  redirect("/dashboard");
};
