import Link from "next/link";
import styles from "../style/style.module.css";
import { Product } from "@/types/Product";

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

export default async function Porducts() {
  const products: Product[] = await getProducts();
  return (
    <>
      <Link href="/">Home</Link>
      {products.length === 0 ? (
        <h1> ...Loading</h1>
      ) : (
        <ul>
          <>{new Date().toLocaleTimeString()}</>
          {products.map((el) => (
            <Link
              className={styles.card_item}
              href={`/products/${el.id}`}
              key={el.id}
            >
              <span>Name: {el.title}</span>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}
