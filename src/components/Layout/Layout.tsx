import React from "react";

// styles
import styles from "./Layout.module.scss";

// components
import { Navbar } from "./_components_/Navbar/Navbar";

interface Props {
  navbar?: boolean;
}

const Layout: React.FC<Props> = ({ children, navbar = true }) => {
  return (
    <>
      {navbar && <Navbar />}
      <main className={styles.content}>{children}</main>
    </>
  );
};

export { Layout };
