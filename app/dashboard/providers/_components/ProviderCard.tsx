import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProviderCard({ provider }: { provider: Provider }) {
  const products = provider.products || []; // Usa un valor por defecto si provider.products es undefined

  return (
    <Card className="w-full min-w-[350px] max-w-[350px]">
      <CardHeader>
        <b>{provider.providerName}</b>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Correo electrónico:</p>
        <b>{provider.providerEmail}</b>
        <p>Numero de teléfono:</p>
        <b>{provider.providerPhoneNumber}</b>
        {products.length !== 0 ? (
          <p>
            Tiene <b>{products.length}</b> producto
            {products.length > 1 ? "s" : ""}
          </p>
        ) : (
          <p>No tiene productos</p>
        )}
      </CardBody>
    </Card>
  );
}
