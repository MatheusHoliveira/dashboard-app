import { Text } from "@chakra-ui/react";
import styles from "./Card.module.css";

function Card() {
  const Data = {
    Name: "Matheus Carvalho",
    task: "4",
  };

  return (
    <div>
      <div className={styles.CardInicial}>
        <div className={styles.cardTitle}>
          <strong>Olá, {Data.Name}!</strong>

          <Text>
            Você tem {Data.task} tarefas <br /> para serem concluidas
          </Text>
        </div>
        <div>
          <img className={styles.imgCard} src="/pp.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
