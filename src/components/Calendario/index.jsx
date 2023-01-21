import { Text } from "@chakra-ui/react";
import styles from "./Calendario.module.css";

function Card() {
  const Data = {
    Name: "Matheus Carvalho",
    task: "4",
  };

  return (
    <div>
      <div className={styles.CardCalendario}>
        <img
          className={styles.imgCalendario}
          src="/CalendarioJaneiro.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
