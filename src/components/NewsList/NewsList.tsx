import Card from "../Card/Card";
import styles from "./NewsList.module.css";

const NewsList = () => {
  return (
    <section className="custom-section">
      <div className="custom-container">
        <div className={styles.newsListContainer}>
          <h2 className="title-section">Новости и события</h2>
          <div className={styles.newsListTable}>
            <div className={styles.newsCard}>
              <Card />
            </div>
            <div className={styles.newsCard}>
              <Card />
            </div>
            <div className={styles.newsCard}>
              <Card />
            </div>
            <div className={styles.newsCard}>
              <Card />
            </div>
            <div className={styles.newsCard}>
              <Card />
            </div>
            <div className={styles.newsCard}>
              <Card />
            </div>
            <div className={styles.newsCard}>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsList;
