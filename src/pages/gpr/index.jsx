import SideMenu from "@/components/SideMenu";
import Link from "next/link";

function GPR() {
  return (
    <>
      <div className="">
        <SideMenu />
        <div className="PagesDirecionamento">
          <Link href="/">Home</Link>
          <h6>Bem vindo ao GPR</h6>
        </div>
      </div>
    </>
  );
}

export default GPR;
