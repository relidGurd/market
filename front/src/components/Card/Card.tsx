import styles from "./Card.module.css";
import Image from "next/image";
const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <Image
          className={styles.cardImage}
          src={"/test.png"}
          width={300}
          height={250}
          alt=""
        />
      </div>
      <span className={styles.cardCategory}>Рубрика</span>
      <h2 className={styles.cardTitle}>1C:Бухгалтерия</h2>
      <p className={styles.cardDescription}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eius vel
        facere quis at? Alias tempora asperiores excepturi eum exercitationem
        suscipit hic neque tenetur voluptatem nemo. Explicabo, molestiae. Rerum,
        possimus.
      </p>
      <span className={styles.cardDate}>21.08.2024 в 12:00</span>
    </div>
  );
};

export default Card;
