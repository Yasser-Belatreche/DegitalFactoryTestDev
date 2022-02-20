import React from "react";

// styles
import styles from "../../../Layout.module.scss";

// helpers
import { ICONS } from "../../../../../utils/constants/Icons";

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
