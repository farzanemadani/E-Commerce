import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import productItems from "../../data/products.json";

function ProductPage() {
    const {query} = useRouter();
    const {slug} = query;
    const product = productItems.find((pItem) => pItem.slug === slug);
    console.log('product', product)
    console.log('productItems', productItems)


    if(!product){
        return <div>product not Found.</div>
    }
    return ( 
        <Layout title={product.title}>
            <h2>{product.title}</h2>
        </Layout>
     );
}

export default ProductPage;