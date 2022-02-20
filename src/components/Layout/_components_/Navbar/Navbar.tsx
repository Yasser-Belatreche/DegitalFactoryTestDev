import React from "react";
import { useSearchParams } from "react-router-dom";
import { SearchForm } from "../../../SearchForm/SearchForm";

// styles
import styles from "../../Layout.module.scss";

// components
import { Logo } from "./_components_/Logo";

type Props = {};

const Navbar = (props: Props) => {
  const [_, setSearchParams] = useSearchParams();

  return (
    <div className={styles.navbar}>
      <div className={styles.searchAndLogo}>
        <Logo />
        <SearchForm
          onSubmit={(term) => setSearchParams({ q: term.replace(" ", "+") })}
        />
      </div>
    </div>
  );
};

export { Navbar };
