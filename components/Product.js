import Link from "next/link";
function Product({ item }) {
  return (
    <div className="cart bg-white rounded-xl mb-5 block ">
      <Link href={`/product/${item.slug}`}>
        <img className="rounded-t-xl" src={item.image}></img>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
      <Link href={`/product/${item.slug}`}>
        <h2 className="text-lg">{item.title}</h2>
      </Link>
      <p className="p-2">{item.price}</p>
      <button className="rounded-xl bg-gray-700 text-white px-4 py-2">Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
