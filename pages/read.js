import Head from "next/head";
import styles from "../styles/Home.module.css";

// 1. Find an API
// (Application Programming Interface -> Server where you can fetch data from)
// https://cataas.com/cat?json=true
// 2. We need to make a request (using fetch)
// 3. We store the data from the api
// 4. We want to display the data to the user
// 5. We want to make this request when the page loads (automatically)

export default function Read() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fetching data</h1>
      </main>
    </div>
  );
}
