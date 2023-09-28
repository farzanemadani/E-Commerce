import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import productItems from "../../data/products.json";
import Image from "next/image";

function ProductPage() {
  const { query } = useRouter();
  const { slug } = query;
  const product = productItems.find((pItem) => pItem.slug === slug);
  console.log("product", product);
  console.log("productItems", productItems);

  if (!product) {
    return <div>product not Found.</div>;
  }
  return (
    <Layout title={product.title}>
      <div className="grid md:grid-cols-4 md:gap-3 bg-white rounded-xl p-10">
        <div className="md:cols-span-2">
          <Image
            className="rounded-xl"
            src={product.image}
            width={340}
            height={340}
            layout="responsive"
            alt={product.title}
          />
        </div>
        <div className="text-lg">
          <h2>{product.title}</h2>
          <p>{product.cat}</p>
          <p>{product.discription}</p>
        </div>
        <div className="p-5">
          <div className="mb-2 flex justify-between">
            <div>Price:</div>
            <div>{product.price}</div>
          </div>
          <div className="mb-2 flex justify-between">
            <div>Status:</div>
            <div>{product.count > 0 ? "Available" : "Unavailable"}</div>
          </div>
          <button className="rounded-xl bg-gray-700 text-white px-4 py-2 w-full">Add To Cart</button>
        </div>
      </div>
    </Layout>
  );
}

export default ProductPage;
