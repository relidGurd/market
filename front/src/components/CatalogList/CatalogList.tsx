import Image from "next/image";
import Card from "../Card/Card";
import styles from "./CatalogList.module.css";
import Link from "next/link";
import { ICategory, ICategoryProps } from "@/types/category";
const CatalogList: React.FC<{ categories: ICategory[] }> = ({ categories }) => {
  return (
    <section className={`custom-section`}>
      <div className={`custom-container`}>
        <ul className={styles.categoriesListContainer}>
          {categories.map((el: ICategory) => (
            <Link key={el.id} href={`/catalog/${el.slug}`}>
              <li className={styles.categoryListItem}>
                <div className={styles.cardImageContainer}>
                  <Image
                    className={styles.cardImage}
                    src={"/logo1fc.svg"}
                    width={100}
                    height={100}
                    alt=""
                  />
                </div>
                <div className={styles.cardTitle}>{el.title}</div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CatalogList;
