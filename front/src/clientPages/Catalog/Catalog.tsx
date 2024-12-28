"use client";
import BannerForm from "@/components/BannerForm/BannerForm";
import style from "./Catalog.module.css";

import CatalogList from "@/components/CatalogList/CatalogList";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import { IPage } from "@/types/page";

const CatalogPage: React.FC<IPage> = ({
  title,
  description,
  categories,
  recommendations,
  components,
}) => {
  return (
    <>
      <section className={`custom-section`}>
        <div className={`custom-container`}>
          <div>
            <h1>{title}</h1>
            <p style={{ margin: "1rem 0" }}>{description}</p>
          </div>
        </div>
      </section>
      <CatalogList categories={categories} />
      <BannerForm />
      <ProductCarousel />
    </>
  );
};

export default CatalogPage;
