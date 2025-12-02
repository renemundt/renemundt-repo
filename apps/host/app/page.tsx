import styles from "./page.module.css";

export default function Home(): React.JSX.Element {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Host Application</h1>
        <p>Welcome to the host app</p>
      </main>
    </div>
  );
}
