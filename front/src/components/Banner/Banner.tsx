"use client";
import styles from "./Banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Banner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 80]);

  return (
    <section ref={ref} className="custom-section custom-container">
      <div className={styles.playGround}>
        <motion.div style={{ y, z: 500 }} className={styles.bgBannerContainer}>
          <Image
            className={styles.bgBannerImg}
            width={1000}
            height={1000}
            alt=""
            src={"/banner-bg.svg"}
          />
        </motion.div>
        <div className={styles.bannerSpecialOffer}>
          <h2 className="title-section white">Специльное предложжение</h2>
          <p className={`white`}>Скидки, привилегии, комбо-программы</p>
          <div className={styles.offerContainer}>
            <Swiper slidesPerView={3} spaceBetween={16}>
              <SwiperSlide>
                <div className={styles.specialOfferCard}>
                  <div className={styles.offerInfo}>
                    <div className={styles.offerImageContainer}>
                      <Image
                        className={styles.offerImage}
                        src={"/1c-prev.png"}
                        width={400}
                        height={400}
                        alt=""
                      />
                    </div>
                    <div className={styles.offerTextContainer}>
                      <span>1C для любого бизнеса</span>
                      <div className={styles.offerTitle}>1С-Отчетность</div>
                    </div>
                  </div>
                  <div className={styles.offerPrice}>Скидка 50%</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.specialOfferCard}>
                  <div className={styles.offerInfo}>
                    <div className={styles.offerImageContainer}>
                      <Image
                        className={styles.offerImage}
                        src={"/1c-prev.png"}
                        width={400}
                        height={400}
                        alt=""
                      />
                    </div>
                    <div className={styles.offerTextContainer}>
                      <span>1C для любого бизнеса</span>
                      <div className={styles.offerTitle}>1С-Отчетность</div>
                    </div>
                  </div>
                  <div className={styles.offerPrice}>Скидка 50%</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.specialOfferCard}>
                  <div className={styles.offerInfo}>
                    <div className={styles.offerImageContainer}>
                      <Image
                        className={styles.offerImage}
                        src={"/1c-prev.png"}
                        width={400}
                        height={400}
                        alt=""
                      />
                    </div>
                    <div className={styles.offerTextContainer}>
                      <span>1C для любого бизнеса</span>
                      <div className={styles.offerTitle}>1С-Отчетность</div>
                    </div>
                  </div>
                  <div className={styles.offerPrice}>Скидка 50%</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.specialOfferCard}>
                  <div className={styles.offerInfo}>
                    <div className={styles.offerImageContainer}>
                      <Image
                        className={styles.offerImage}
                        src={"/1c-prev.png"}
                        width={400}
                        height={400}
                        alt=""
                      />
                    </div>
                    <div className={styles.offerTextContainer}>
                      <span>1C для любого бизнеса</span>
                      <div className={styles.offerTitle}>1С-Отчетность</div>
                    </div>
                  </div>
                  <div className={styles.offerPrice}>Скидка 50%</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.specialOfferCard}>
                  <div className={styles.offerInfo}>
                    <div className={styles.offerImageContainer}>
                      <Image
                        className={styles.offerImage}
                        src={"/1c-prev.png"}
                        width={400}
                        height={400}
                        alt=""
                      />
                    </div>
                    <div className={styles.offerTextContainer}>
                      <span>1C для любого бизнеса</span>
                      <div className={styles.offerTitle}>1С-Отчетность</div>
                    </div>
                  </div>
                  <div className={styles.offerPrice}>Скидка 50%</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
