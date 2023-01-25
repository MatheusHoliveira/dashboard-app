import { Text } from "@chakra-ui/react";
import styles from "./Calendario.module.css";

function Calendario() {
  return (
    <div>
      <div className={styles.CardCalendario}>
        <div className={styles.cardTitleCalendario}></div>
        <img src="/CalendarioJaneiro.png" alt="" />
      </div>
    </div>
  );
}

export default Calendario;
