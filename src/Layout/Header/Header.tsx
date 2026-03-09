import React from "react";
import "./Header.scss";
import Link from "next/link";

type HeaderProps = {
  ariaLabel?: string;
};

export default function Header({ ariaLabel }: HeaderProps) {
  return (
    <header className="demo-header" aria-label={ariaLabel}>
      <div className="demo-header__heading">
        <Link href="/">Demo</Link>
      </div>
    </header>
  );
}
