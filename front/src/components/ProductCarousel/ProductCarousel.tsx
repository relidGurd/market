"use cleint";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import styles from "./ProductCarousel.module.css";
import "swiper/css";
import Link from "next/link";

const ProductCarousel = () => {
  return (
    <section className="custom-section">
      <div className="custom-container">
        <div className={styles.ProductCarouselContainer}>
          <h2 className="title-section">Кассовое оборудование</h2>
          <Link className={styles.allProductsLink} href={"/"}>
            Смотреть все товары
          </Link>
          <Swiper
            slidesPerView={4}
            spaceBetween={16}
            style={{ marginTop: "2rem" }}
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
