import Breadcrubs from "@/components/Breadcrumb/Breadcrumb";
import styles from "./CategoryPage.module.css";
import Link from "next/link";
import Image from "next/image";
import { ICategory } from "@/types/category";
import { IProduct } from "@/types/productTypes";

const CategoryPage: React.FC<{ data: ICategory }> = ({ data }) => {
  return (
    <section className="custom-section">
      <div className="custom-container">
        <ul className={styles.categoryProductList}>
          {data.products
            .filter((el: IProduct) => el.publishedAt !== null)
            .map((el: IProduct) => (
              <li className={styles.categoryProductItem}>
                <Link
                  className={styles.productItem}
                  href={`/product/${el.title}`}
                >
                  <div className={styles.productItemImageContainer}>
                    <Image
                      className={styles.productItemImage}
                      src={"/1c-prev.png"}
                      width={200}
                      height={200}
                      alt={"1c"}
                    />
                  </div>
                  <div className={styles.productItemInfo}>
                    <h3 className={styles.productTitle}>{el.title}</h3>

                    <span className={styles.categoryProductTitle}>
                      Артикул: {el.article}
                    </span>
                    <p>{el.description}</p>
                  </div>

                  <div className={styles.buttonSection}>
                    <button className="button-red">Заказать</button>
                    <button className="buttton-white">Арендовать</button>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoryPage;
