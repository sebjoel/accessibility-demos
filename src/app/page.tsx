import Layout from "@/Layout/Layout";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Demos",
  description: "A collection of accessibility demos",
  keywords: "accessibility, demos, web development",
};

export default function Home() {
  return (
    <Layout>
      <h1 className="page__heading">Accessibility Demos</h1>
      <nav className="page__nav">
        <ul className="page__nav-list">
          <li className="page__nav-list-item">
            <Link className="page__nav-link" href="/product-cards">
              Product Cards
            </Link>
          </li>
        </ul>
      </nav>
    </Layout>
  );
}
