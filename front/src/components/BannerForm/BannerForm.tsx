"use client";
import styles from "./BannerForm.module.css";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const BannerForm = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section ref={ref} className="custom-section custom-container">
      <div className={styles.playGround}>
        <motion.div style={{ y, z: 100 }} className={styles.bgBannerContainer}>
          <Image
            className={styles.bgBannerImg}
            width={1000}
            height={1000}
            alt=""
            src={"/spot.svg"}
          />
        </motion.div>
        <div className={styles.bannerSpecialOffer}>
          <h2 className="title-section white">Нужна консультация?</h2>
          <p className={`white`}>
            Оставьте заявку и наши специалисты ответят на все ваши вопросы.
          </p>
          <form className={styles.offerContainer}>
            <input
              placeholder="Ваше имя"
              className={styles.formInput}
              type="text"
            />
            <input
              placeholder="+7 (999) 999-99-99"
              className={styles.formInput}
              type="number"
            />
            <button className={`${styles.formButton} buttton-white`}>
              Отпарвить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BannerForm;
