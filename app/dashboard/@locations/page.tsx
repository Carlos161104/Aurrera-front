import { API_URL, TOKEN_NAME } from "@/constants";
import { Location, Manager } from "@/entities";
import SelectLocation from "./_Components/SelectLocation";
import LocationCard from "./_Components/LocationCard";
import FormNewLocation from "./_Components/formNewLocation";
import DeleteLocationButton from "./_Components/DeleteLocationButton";
import { AuthHeaders } from "@/helpers/authHeaders";
import UpdateLocation from "./_Components/updateLocation";
import FormUpdateLocation from "./_Components/formUpdateLocation";

const LocationsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const authHeaders = AuthHeaders();
  const response = await fetch(`${API_URL}/locations`, {
    headers: {
      ...authHeaders,
    },
    next: {
      tags: ["dashboard:locations"],
    },
  });

  let data: Location[] = await response.json();
  data = [
    {
      locationID: 0,
      locationName: "Ninguna",
      locationLatLng: [0, 0],
      locationAddress: "Ninguna",
      manager: { name: "Ninguno" } as unknown as Manager,
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
          <FormNewLocation store={searchParams?.store} />
        </div>
        <div className="flex flex-row flex-grow-0 gap-0 items-center my-5">
          <DeleteLocationButton store={searchParams?.store} />
          <UpdateLocation store={searchParams?.store}>
            <FormUpdateLocation store={searchParams?.store} />
          </UpdateLocation>
        </div>
      </div>
    </div>
  );
};
export default LocationsPage;
