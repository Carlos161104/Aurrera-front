'use server';

import { API_URL, TOKEN_NAME } from "@/constants";
import axios from "axios";
import { cookies } from "next/headers";

export const deleteLocation =(formData: FormData) => {
  const token = cookies().get(TOKEN_NAME)?.value

  const locationID = formData.get('deleteValue')
  if (!locationID) return;

  axios.delete(`${API_URL}/location/${locationID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return;
}

