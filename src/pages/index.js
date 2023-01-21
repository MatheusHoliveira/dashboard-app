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
    date: "21/01/2022",
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
      <div>
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
