import { FC } from "react";
import styles from "./ButtonRed.module.scss";

interface ButtonRedProps {
  act?: () => void;
  text: string;
}

const ButtonRed: FC<ButtonRedProps> = ({ act, text }) => {
  return (
    <button className={styles.btn} onClick={act}>
      {text}
    </button>
  );
};

export default ButtonRed;
