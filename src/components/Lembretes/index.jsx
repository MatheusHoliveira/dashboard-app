import { Text } from "@chakra-ui/react";
import styles from "./Lembrete.module.css";

function Lembretes({ project, date }) {
  return (
    <div className={styles.CardLembretes}>
      <div className={styles.CardLembretesTitle}>
        <h2>Projeto: {project}!</h2>
        <Text>Data de entrega: {date}</Text>
      </div>
    </div>
  );
}

export default Lembretes;
