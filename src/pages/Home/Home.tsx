import React from "react";

// styles
import styles from "./Home.module.scss";

// components
import { Layout } from "../../components/Layout/Layout";
import { Logo } from "./_components_/Logo/Logo";
import { SearchBox } from "./_components_/SearchBox/SearchBox";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Layout navbar={false}>
      <div className={styles.container}>
        <Logo />
        <SearchBox />
      </div>
    </Layout>
  );
};

export { Home };
