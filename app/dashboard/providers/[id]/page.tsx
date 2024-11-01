import { API_URL } from "@/constants";
import { Product, Provider } from "@/entities";
import Link from "next/link";
import { AuthHeaders } from "@/helpers/authHeaders";
import FormUpdateProvider from "./_components/FormUpdateProviders";
import ProductCard from "./_components/ProductCard";
import ProviderCard from "../_components/ProviderCard";

export default async function ProviderPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const provider: Provider = await (
    await fetch(`${API_URL}/providers/${params.id}`, {
      headers: {
        ...AuthHeaders(),
      },
      next: {
        tags: [`dashboard:providers:${params.id}`],
      },
    })
  ).json();

  const products = provider.products || []; // Usa un valor por defecto si provider.products es undefined

  return (
    <div className="flex flex-grow-0 flex-col pl-10 gap-10 h-[90vh] pt-10">
      <div className="flex flex-row items-center gap-6">
        <ProviderCard provider={provider} />
        <FormUpdateProvider provider={provider} />
      </div>
      <div className="h-1 bg-orange-900 w-[85vw]" />
      <div className="flex flex-wrap gap-10">
        {products.map((product: Product) => (
          <Link
            href={{ pathname: `/dashboard/products/${product.productId}` }}
            key={product.productId}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
