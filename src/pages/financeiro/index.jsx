// import { Text, Button } from "@chakra-ui/react";
import SideMenu from "@/components/SideMenu";
import Link from "next/link";

function Financeiro() {
  return (
    <div className="div">
      <SideMenu />
      <div className="PagesDirecionamento">
        <Link href="/">Home</Link>
        <h6>Bem vindo ao Financeiro</h6>
      </div>
    </div>
  );
}

export default Financeiro;
