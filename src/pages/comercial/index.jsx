import SideMenu from "@/components/SideMenu";
import Link from "next/link";
import Layout from "@/components/Layout";

function Comercial() {
  return (
    <Layout>
      <div className="PagesDirecionamento">
        <Link href="/">Home</Link>
        <h6>Bem vindo ao Comercial</h6>
      </div>
    </Layout>
  );
}

export default Comercial;
