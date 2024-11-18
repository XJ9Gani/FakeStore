"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/index";
import { fetchProductByCotegory, setCategory } from "@/store/productSlice";
import { Product } from "@/types/Product";
import { useEffect } from "react";
import styles from "./style/home.module.css";
export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, category, status } = useSelector(
    (state: any) => state.products
  );

  useEffect(() => {
    if (category) {
      dispatch(fetchProductByCotegory(category));
    }
  }, [category, dispatch]);
  const handleProductsCotegory = (category: string) => {
    dispatch(setCategory(category));
    dispatch(fetchProductByCotegory(category));
  };
  return (
    <>
      <section className={styles.serachSection}>
        <nav className={styles.searchNav}>
          <span
            className={styles.navItem}
            onClick={() => handleProductsCotegory("men's clothing")}
          >
            MEN
          </span>
          <span
            className={styles.navItem}
            onClick={() => handleProductsCotegory("women's clothing")}
          >
            WOMEN
          </span>

          <input className={styles.navInput} placeholder="Search" />
        </nav>
      </section>

      <section>
        <ul className={styles.cardList}>
          {products.map((el: Product) => (
            <li key={el.id} className={styles.cardContainer}>
              <img src={el.image} className={styles.cardImg} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
