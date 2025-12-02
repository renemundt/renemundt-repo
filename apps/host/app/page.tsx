import styles from "./page.module.css";

export default function Home(): React.JSX.Element {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello there, I am the host</h1>
      </main>
    </div>
  );
}
