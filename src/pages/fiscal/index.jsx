import SideMenu from "@/components/SideMenu";
import Link from "next/link";

function Fiscal() {
  return (
    <>
      <div className="">
        <SideMenu />
        <div className="PagesDirecionamento">
          <Link href="/">Home</Link>
          <h6>Bem vindo ao Fiscal</h6>
        </div>
      </div>
    </>
  );
}

export default Fiscal;
