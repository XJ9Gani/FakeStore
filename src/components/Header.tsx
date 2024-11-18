import Link from "next/link";
import styles from "../app/style/header.module.css";
export default function Header() {
  return (
    <>
      {" "}
      <header className={styles.header}>
        <nav className={styles.headerNavbar}>
          <Link href="/" className={styles.navItem}>
            Home
          </Link>
          <Link href="/collection" className={styles.navItem}>
            Collection
          </Link>
          <Link href="/posts" className={styles.navItem}>
            New
          </Link>
        </nav>

        <div className={styles.headerLogoContainer}>
          <img src="/logo.svg" className={styles.headerLogo} />
        </div>

        <div className={styles.headerIconSection}>
          <span className={styles.headerIconItem}>
            <img src="/heartIcon.svg" />
          </span>
          <span className={styles.headerIconItem}>
            {" "}
            <img src="/personIcon.svg" />
          </span>
        </div>
      </header>
    </>
  );
}
