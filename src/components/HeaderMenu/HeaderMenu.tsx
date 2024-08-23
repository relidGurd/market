import Image from "next/image";
import Logo from "../../../public/icons/Logo";
import styles from "./HeaderMenu.module.css";
import Link from "next/link";

const HeaderMenu = () => {
  return (
    <header className={styles.headerMenu}>
      <div className={`custom-container`}>
        <div className={styles.headerMenuItems}>
          <div className={styles.logoSquare}>
            <Image
              src={"/logo1c.svg"}
              width={50}
              height={50}
              alt="Логотип 1С Франчайз"
            />
          </div>
          <div className={styles.menuSquare}>
            <ul className={styles.menuSquareList}>
              <li>
                <Link href={`/`}>Продукты</Link>
              </li>{" "}
              <li>
                <Link href={`/`}>Бизнесу</Link>
              </li>
              <li>
                <Link href={`/`}>События</Link>
              </li>
              <li>
                <Link href={`/`}>Тарифы</Link>
              </li>
              <li>
                <Link href={`/`}>Партнерам</Link>
              </li>
              <li>
                <Link href={`/`}>Контакты</Link>
              </li>
            </ul>
          </div>
          <div className={styles.infoSquare}>
            <button className={`button-red`}>Консультация</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
