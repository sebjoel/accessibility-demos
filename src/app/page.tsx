import Layout from "@/Layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <h1>Accessibility Demos</h1>
      <Link href="/product-cards">Product Cards</Link>
    </Layout>
  );
}
