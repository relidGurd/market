import styles from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Card from "../Card/Card";

const Slider = () => {
  return (
    <section className={`custom-section`}>
      <div className="custom-container">
        <div className={`${styles.bannerSection}`}>
          <div className={styles.leftSwiperContainer}>
            <Swiper style={{ height: "100%" }} spaceBetween={16}>
              <SwiperSlide className={styles.slideContainer}>
                <Image
                  className={styles.slideImage}
                  src={"/ban1.jpg"}
                  width={1200}
                  height={600}
                  alt=""
                />
                <div className={styles.sliderTextContainer}>
                  <div>
                    <h1 className={`title-section white`}>
                      1С:Предприятие 8 через Интернет
                    </h1>
                    <p className={`text-xl white`}>
                      Ведите бухгалтерский и налоговый учет, контролируйте
                      бизнес и управляйте им, сдавайте отчетность через Интернет
                      с помощью популярных программ "1С"
                    </p>
                  </div>
                  <button className={"buttton-white"}>Каталог</button>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slideContainer}>
                <Image
                  className={styles.slideImage}
                  src={"/ban1.jpg"}
                  width={1200}
                  height={600}
                  alt=""
                />
                <div className={styles.sliderTextContainer}>
                  <div>
                    <h1 className={`title-section white`}>
                      1С:Предприятие 8 через Интернет
                    </h1>
                    <p className={`text-xl white`}>
                      Ведите бухгалтерский и налоговый учет, контролируйте
                      бизнес и управляйте им, сдавайте отчетность через Интернет
                      с помощью популярных программ "1С"
                    </p>
                  </div>
                  <button className={"buttton-white"}>Каталог</button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Slider;
