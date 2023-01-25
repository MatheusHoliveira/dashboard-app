import SideMenu from "@/components/SideMenu";
import Card from "@/components/Card";
import Calendario from "@/components/Calendario";
import Lembretes from "@/components/Lembretes";
import Notificacoes from "@/components/Notificacoes";
import { Inter } from "@next/font/google";
import Layout from "@/components/Layout";
// import { Box, Text } from "@chakra-ui/react";
// import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const lembretesData = [
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

export default function Home() {
  return (
    <Layout>
      <div>
        <Card />
      </div>
      <div>
        <Calendario />
      </div>
      <div className="fatherDiv">
        {lembretesData?.map((item) => (
          <Lembretes key={item.id} project={item.project} date={item.date} />
        ))}
      </div>
      <div>
        <Notificacoes />
      </div>
    </Layout>
  );
}
