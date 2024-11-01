import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import Link from "next/link";
import ProviderCard from "./_components/ProviderCard";
import CreateProvider from "./_components/CreatePrrovider";
import FormCreateProvider from "./_components/FormCreateProvider";
import { AuthHeaders } from "@/helpers/authHeaders";
const ProviderPage = async () => {
  const response = await fetch(`${API_URL}/providers`, {
    headers: {
      ...AuthHeaders(),
    },
    next: {
      tags: ["dashboard:providers"],
    },
  });
  const providers: Provider[] = await response.json();

  return (
    <div className="flex flex-grow-0 flex-col items-end w-full px-10 pt-10 h-[90vh]">
      <CreateProvider>
        <FormCreateProvider />
      </CreateProvider>
      <div className="flex flex-wrap w-full py-20 flex-grow-0 gap-14">
        {providers.map((provider: Provider) => (
          <Link
            className="hover:scale-110 transition-transform"
            href={{ pathname: `/dashboard/providers/${provider.providerId}` }}
          >
            <ProviderCard provider={provider} key={provider.providerId} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProviderPage;
