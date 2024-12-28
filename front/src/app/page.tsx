"use client";
import Slider from "../components/Slider/Slider";
import styles from "./page.module.css";
import CategoryList from "../components/CategoryList/CategoryList";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import Banner from "../components/Banner/Banner";
import NewsList from "../components/NewsList/NewsList";
import BannerForm from "../components/BannerForm/BannerForm";

export default function Home() {
  return (
    <main>
      <Slider />
      <CategoryList />
      <Banner />
      <ProductCarousel />
      {/* <Accordion /> */}
      <BannerForm />
      <NewsList />
    </main>
  );
}
