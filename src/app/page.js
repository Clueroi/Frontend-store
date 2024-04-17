import styles from "./page.module.css";

import FilterNav from "@/components/filterNavigation";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterNav/>
    </main>
  );
}
