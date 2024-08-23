import Image from "next/image";
import Card from "../Card/Card";
import styles from "./CategoryList.module.css";

const CategoryList = () => {
  return (
    <section className={`custom-section`}>
      <div className={`custom-container`}>
        <div className={styles.categoryListContainer}>
          <div>
            <h2 className="title-section">Программные продукты «1С»</h2>
            <p className={styles.categoryMainDescription}>
              Повышайте производительность – автоматизируйте бизнес-процессы с
              помощью программ «1С»
            </p>
            <button className="buttton-white" style={{ marginRight: "1rem" }}>
              Заказать консультацию
            </button>
            <button className="buttton-white">Смотреть все</button>
          </div>

          <ul className={styles.categoriesListContainer}>
            <li className={styles.categoryListItem}>
              <div className={styles.cardImageContainer}>
                <Image
                  className={styles.cardImage}
                  src={"/iconCategory.png"}
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className={styles.cardDescription}>
                <div className={styles.cardTitle}>
                  1C: Управление предприятием общепита
                </div>
                <p className={styles.cardText}>
                  Решение «1С:Управление предприятием общепита» предназначено
                  для автоматизации процессов управления деятельностью
                  независимых и сетевых предприятий общественного питания
                  различных форматов и концепций
                </p>
              </div>
            </li>
            <li className={styles.categoryListItem}>
              <div className={styles.cardImageContainer}>
                <Image
                  className={styles.cardImage}
                  src={"/iconAcc.png"}
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className={styles.cardDescription}>
                <div className={styles.cardTitle}>1С:Бухгалтерия ПРОФ</div>
                <p className={styles.cardText}>
                  Решение «1С:Управление предприятием общепита» предназначено
                  для автоматизации процессов управления деятельностью
                  независимых и сетевых предприятий общественного питания
                  различных форматов и концепций
                </p>
              </div>
            </li>
            <li className={styles.categoryListItem}>
              <div className={styles.cardImageContainer}>
                <Image
                  className={styles.cardImage}
                  src={"/iconPredp.png"}
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className={styles.cardDescription}>
                <div className={styles.cardTitle}>
                  1С:ERP Управление предприятием
                </div>
                <p className={styles.cardText}>
                  Решение «1С:Управление предприятием общепита» предназначено
                  для автоматизации процессов управления деятельностью
                  независимых и сетевых предприятий общественного питания
                  различных форматов и концепций
                </p>
              </div>
            </li>
            <li className={styles.categoryListItem}>
              <div className={styles.cardImageContainer}>
                <Image
                  className={styles.cardImage}
                  src={"/iconSallary.png"}
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className={styles.cardDescription}>
                <div className={styles.cardTitle}>
                  1С:Зарплата и управление персоналом КОРП
                </div>
                <p className={styles.cardText}>
                  Решение «1С:Управление предприятием общепита» предназначено
                  для автоматизации процессов управления деятельностью
                  независимых и сетевых предприятий общественного питания
                  различных форматов и концепций
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
