import { TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import axios from "axios";
import { cookies } from "next/headers";
import SelectLocation from "./_Components/SelectLocation";
import LocationCard from "./_Components/LocationCard";

const LocationsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const useCookies = cookies();
  const token = useCookies.get(TOKEN_NAME)?.value;

  let { data } = await axios.get<Location[]>(
    "http://localhost:4000/locations",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  data = [
    {
      locationID: 0,
      locationName: "Ninguna",
      locationLatLng: [0, 0],
      locationAddress: "Ninguna",
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
          <LocationCard store={searchParams?.store}/>
        </div>
      </div>
    </div>
  );
};
export default LocationsPage;
