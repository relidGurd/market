import Link from "next/link";
import styles from "./Breadcrumb.module.css";
interface IBreadCrumb {
  title: string;
  list?: IBreadCrumbItem[];
}

interface IBreadCrumbItem {
  href: string;
  title: string;
}

const Breadcrubs: React.FC<IBreadCrumb> = ({ list, title }) => {
  return (
    <section className="custom-section">
      <div className={`custom-container`}>
        <ul className={styles.productArticle}>
          <li>
            <Link href={"/"}>Главная</Link>
          </li>
          {list &&
            list.map((el: any, index: number) => (
              <li key={index}>
                / <Link href={el.href}>{el.title}</Link>
              </li>
            ))}
          <li>/ {title}</li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrubs;
