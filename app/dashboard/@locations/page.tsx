import { API_URL, TOKEN_NAME } from "@/constants";
import { Location, Manager } from "@/entities";
import axios from "axios";
import { cookies } from "next/headers";
import SelectLocation from "./_Components/SelectLocation";
import LocationCard from "./_Components/LocationCard";
import FormNewLocation from "./_Components/formNewLocation";
import DeleteLocationButton from "./_Components/DeleteLocationButton";
import { AuthHeaders } from "@/helpers/authHeaders";

const LocationsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {

  const authHeaders = await AuthHeaders();
  let { data } = await axios.get<Location[]>(`${API_URL}/locations`, {
    headers: {
      ...authHeaders
    },
  });

  data = [
    {
      locationID: 0,
      locationName: "Ninguna",
      locationLatLng: [0, 0],
      locationAddress: "Ninguna",
      manager: { name: 'Ninguno' } as unknown as Manager,
      employees: [],
    },
    ...data,
  ];

  return (
    <div className="w-7/12">
      <div className="w-full h-[100vh] flex flex-col items-center">
        <div className="w-1/2 mx-10 py-10">
          <SelectLocation locations={data} store={searchParams?.store} />
        </div>
        <div className="w-8/12">
          <LocationCard store={searchParams?.store} />
        </div>
        <div className="w-6/12">
          <FormNewLocation 
          store={searchParams?.store}
          />
        </div>
        <DeleteLocationButton 
        store={searchParams?.store}
        />
      </div>
    </div>
  );
};
export default LocationsPage;
