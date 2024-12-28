"use client";
import styles from "./Product.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Accordion from "@/components/Accodion/Accordion";
import { ProductData } from "@/types/productTypes";

const Product: React.FC<ProductData> = ({ id, attributes }) => {
  return (
    <>
      <Accordion massive={attributes.Details.Accordion}>
        <h1 className={`title-section`}>{attributes.Title}</h1>
        <div className={styles.productCardContainer}>
          <span className={styles.productArticle}>
            Артикул: {attributes.article}
          </span>
          <div className={styles.productCard}>
            <div className={styles.prodImageContainer}>
              <Image
                className={styles.prodImage}
                src={`http://localhost:1337${attributes.image.data.attributes.formats.thumbnail.url}`}
                width={100}
                height={150}
                alt=""
              />
            </div>
            <div className={styles.prodPriceContainer}>
              <span className={styles.prodPrice}>{attributes.price} руб.</span>
              <button className={`button-red`}>Купить</button>
            </div>
            <div className={styles.prodRentContainer}>
              <span className={styles.prodPrice}>
                {attributes.rent_price} руб.
              </span>
              <button className={`buttton-white ${styles.prodButtonRent}`}>
                Арендовать
              </button>
            </div>
          </div>
        </div>
      </Accordion>
    </>
  );
};

export default Product;
