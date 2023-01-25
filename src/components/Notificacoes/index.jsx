// import { Text } from "@chakra-ui/react";
import styles from "./Notificacoes.module.css";

function Card() {
  const lembretes = [
    {
      id: 1,
      project: "Dashboard Mart Minas",
      date: "25/01/2022",
    },
    {
      id: 2,
      project: "PPR",
      date: "30/01/2022",
    },
    {
      id: 3,
      project: "Caixa Preta",
      date: "02/02/2022",
    },
    {
      id: 4,
      project: "Excedentes Financeiro",
      date: "21/02/2022",
    },
    {
      id: 5,
      project: "Caixa Plastica",
      date: "18/03/2022",
    },
    {
      id: 6,
      project: "Movimentação Pessoal",
      date: "22/03/2022",
    },
  ];
  const AllLembretes = () =>
    lembretes.map((credit) => (
      <li key={credit.id} className={styles.li}>
        Projeto: {credit.project}!
      </li>
    ));
  return (
    <div>
      <div className={styles.CardNotificacoes}>
        <div className={styles.cardTitleNotificacoes}>
          <ul className={styles.ul}>
            <strong className={styles.Strong}>Notificações</strong>
            {AllLembretes()}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
