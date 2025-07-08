export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return (
    <main className="p-[30px]">
      <h2 className="text-[26px] font-bold">
        details about product {productId}
      </h2>
    </main>
  );
}
