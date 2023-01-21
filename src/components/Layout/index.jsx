import SideMenu from "../SideMenu";
import styles from "./Layout.module.css";

const menu = [
  { id: 1, url: "/comercial", name: "Comercial" },
  { id: 2, url: "/financeiro", name: "Financeiro" },
  { id: 3, url: "/fiscal", name: "Fiscal" },
  { id: 4, url: "/gpr", name: "GPR" },
];

function Layout({ children }) {
  return (
    <div>
      <SideMenu menu={menu} />
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default Layout;
