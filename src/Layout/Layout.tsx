import React, { ReactNode } from "react";
import Footer from "@/Layout/Footer/Footer";
import Header from "@/Layout/Header/Header";
import "./Layout.scss"; // Assuming you have some CSS for layout

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}
