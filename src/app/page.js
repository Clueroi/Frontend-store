import styles from "./page.module.css";

import FilterNav from "@/components/filter/filterNavigation";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterNav/>
    </main>
  );
}
