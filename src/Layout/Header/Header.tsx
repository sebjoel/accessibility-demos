import React, { ReactNode } from "react";
import "./Header.scss";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <header className="demo-header">
      <div className="demo-header__heading">
        <a href="/">Demo</a>
      </div>
    </header>
  );
}
