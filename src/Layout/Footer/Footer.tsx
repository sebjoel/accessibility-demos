import React from "react";
import "./Footer.scss";

type FooterProps = {
  ariaLabel?: string;
};

export default function Footer({ ariaLabel }: FooterProps) {
  return <footer className="demo-footer" aria-label={ariaLabel}>Footer</footer>;
}
