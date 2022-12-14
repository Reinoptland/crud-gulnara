import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

// 1. X Find an API
// (Application Programming Interface -> Server where you can fetch data from)
// https://cataas.com/cat?json=true
// 2. X We need to make a request (using fetch)
// - make request
// - read the JSON data from the request
// (JSON -> JavaScript Object Notation, string you can turn into a JS object)
// 3. X We store the  data from the api (with useState)
// 4. X We want to display the data to the user
// 5. X We want to make this request when the page loads (automatically)

export default function Read() {
  const [cat, setCat] = useState({});

  async function fetchCat() {
    console.log("FETCHING ...");
    const response = await fetch("https://cataas.com/cat?json=true");
    const data = await response.json();
    console.log("RES", response);
    console.log("JSON", data);
    setCat(data);
  }

  // fetch one cat on startup
  useEffect(() => {
    fetchCat();
  }, []);

  console.log("CAT:", cat);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fetching data</h1>
        <button onClick={fetchCat}>GET A CAT!</button>
        {cat.url ? (
          <img src={`https://cataas.com${cat.url}`} />
        ) : (
          "Click to see a kitty"
        )}
      </main>
    </div>
  );
}
