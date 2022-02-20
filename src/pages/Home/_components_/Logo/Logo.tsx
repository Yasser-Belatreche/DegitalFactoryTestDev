import React from "react";

// helpers
import { ICONS } from "../../../../utils/constants/Icons";

// styles
import styles from "../../Home.module.scss";

interface Props {}

const Logo: React.FC<Props> = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={ICONS.AppleIcon} alt="apple icon" />
      <h1>OurTunes</h1>
    </div>
  );
};

export { Logo };
