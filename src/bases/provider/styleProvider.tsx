import { ReactNode } from "react";
import styles from "../styles/global.module.scss";

const StyleProvider = ({ children }: { children: ReactNode }) => {
  return <div className={styles["provider"]}>{children}</div>;
};

export default StyleProvider;
