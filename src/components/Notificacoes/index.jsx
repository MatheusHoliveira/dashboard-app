// import { Text } from "@chakra-ui/react";
import styles from "./Notificacoes.module.css";

function Card() {
  const Data = {
    Name: "Matheus Carvalho",
    task: "4",
  };

  return (
    <div>
      <div className={styles.CardNotificacoes}>
        <div className={styles.cardTitleNotificacoes}>
          <ul className={styles.ul}>
            <strong className={styles.Strong}>Notificações</strong>
            <li className={styles.li}>vamos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
