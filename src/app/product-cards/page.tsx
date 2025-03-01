import ProductsDo from "@/components/Products/ProductsDo";
import ProductsDoNot from "@/components/Products/ProductsDoNot";
import Layout from "@/Layout/Layout";
import { products } from "@/components/Products/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Cards",
  keywords: "accessibility, demos, web development",
};

export default function ProductCards() {
  return (
    <Layout>
      <h1 className="page__heading">Product Cards</h1>
      <ProductsDoNot products={products} />
      <ProductsDo products={products} />
    </Layout>
  );
}
