import { Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./SideMenu.module.css";

function SideMenu({ menu }) {
  return (
    <>
      <ul className={styles.leftMenu}>
        <div className={styles.title}>
          <span className={styles.label}>Categorias </span>
        </div>
        {menu?.map((item) => (
          <li className={styles.liMenu} key={item.id}>
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default SideMenu;
