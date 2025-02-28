import ProductsDo from "@/components/Products/ProductsDo";
import ProductsDoNot from "@/components/Products/ProductsDoNot";
import Layout from "@/Layout/Layout";
import { products } from "@/components/Products/products";

export default function ProductCards() {
  return (
    <Layout>
      <h1>Product Cards</h1>
      <h2>Do not</h2>
      <ProductsDoNot products={products} />
      <h2>Do this</h2>
      <ProductsDo products={products} />
    </Layout>
  );
}
