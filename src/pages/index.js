import Head from "next/head";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.scss";
import Card from "@/components/Card";
import { dataList } from "@/data";
import { useState, useEffect } from "react";

export default function Home() {
  const add = 8;
  const banner = [
    { number: "+20", title: "Destinazioni" },
    { number: "+15", title: "Imbarcazioni" },
    { number: "+40", title: "Imbarcazioni" },
  ];

  const [totalCard, setTotalCard] = useState(add);
  const onAddCard = () => {
    setTotalCard((prev) => prev + add);
  };
  const cardToRender = dataList.slice(0, totalCard);

  // RANDOM
  console.log(dataList.length);

  const [randomCard, setRandomCard] = useState([]);

  const getRandomCard = () => {
    const randomItems = [];
    while (randomItems.length < add) {
      const randomIndex = Math.floor(Math.random() * dataList.length);
      const randomItem = dataList[randomIndex];
      if (!randomItems.includes(randomItem)) {
        randomItems.push(randomItem);
      }
    }
    setRandomCard(randomItems);
  };

  useEffect(() => {
    getRandomCard();
  }, []);
  console.log(randomCard);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <main className={`${styles.main} `}>
        <Navbar />
        {/* HEADER*/}
        <header className={styles.banner}>
          <p> Lorem ipsum doler sit amet</p>
          <div className={styles.overlay}> </div>
        </header>
        {/* ------SECTIONS START------ */}
        <div className={`${styles.section} `}>
          <div className={styles.card}>
            {cardToRender.map((item) => (
              <Card key={item.id} data={item} />
            ))}{" "}
          </div>{" "}
        </div>
        {/* step2 */}
        <div className={styles.input}>
          <input type="button" value="MOSTRA ALTRI" onClick={onAddCard} />{" "}
        </div>

        {/* BANNER */}
        <header className={styles.banner2}>
          <div className={styles.data}>
            {banner.map((item, index) => (
              <div key={index}>
                <p>{item.number}</p>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <div className={styles.overlay}> </div>
        </header>
        {/* STEP3 */}

        <div className={`${styles.section} `}>
          <p className={styles.title}>Avventure da scoprire</p>
          <div className={styles.card}>
            {randomCard.map((item) => (
              <Card key={item.id} data={item} />
            ))}{" "}
          </div>
        </div>

        {/* ------HEADER------- */}
        {/* <header className={styles.page_header}>
          <div className={styles.initial}>ok</div>
          <p> </p>
        </header> */}
      </main>
    </>
  );
}
