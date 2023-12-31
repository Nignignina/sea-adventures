import Head from "next/head";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.scss";
import Card from "@/components/card";
import Sections from "@/components/sections";

import { dataList } from "@/data";
import { useState, useEffect } from "react";

export default function Home() {
  const add = 8;
  const banner = [
    { number: "+20", title: "Destinazioni" },
    { number: "+15", title: "Imbarcazioni" },
    { number: "+40", title: "Itinerari" },
  ];
  // conditions
  const [totalCard, setTotalCard] = useState(add);
  const [randomCard, setRandomCard] = useState([]);
  const cardToRender = dataList.slice(0, totalCard);
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedPort, setSelectedPort] = useState("all");
  const [showTitle, setShowTitle] = useState(true); // functions

  const onAddCard = () => {
    setTotalCard((prev) => prev + add);
  };

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
  // random
  // secttion

  // const filteredDestinations = selectedLocation
  //   ? dataList?.filter((item) => item?.departure.Port === selectedLocation)
  //   : dataList;

  console.log(dataList.length);
  // by departure port
  const placesData = {};
  dataList.forEach((item) => {
    const { departure } = item;
    const { Port } = departure;
    if (!placesData[Port]) {
      placesData[Port] = [];
    }
    placesData[Port].push(item);
  });
  const departurePorts = Object.keys(placesData);

  // sezioni o tutte
  const handleSection = (e) => {
    const selectedLocation = e.target.value;
    setSelectedLocation(selectedLocation);
    setShowTitle(selectedLocation !== "all");
    if (selectedLocation === "all") {
      setTotalCard(add);
    }
  };

  // porti

  const handlePortSelect = (e) => {
    const selectedPort = e.target.value;
    setSelectedPort(selectedPort);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.svg" type="image" />
      </Head>
      <main className={`${styles.main} `}>
        <Navbar />
        {/* HEADER*/}
        <header className={styles.banner}>
          <p> Lorem ipsum doler sit amet</p>
          <div className={styles.overlay}> </div>
        </header>
        {/* option */}{" "}
        {/* {departurePorts.map((departure, index) => (
          <option key={index} value={departure}>
            {departure}{" "}
          </option>
        ))} */}
        {/* option */}
        <div className={styles.option}>
          <select
            className={styles.select}
            value={selectedLocation}
            onChange={handleSection}>
            <option value="all">Mostra tutti</option>
            <option value="byLocation">Mostra per luogo di partenza</option>
          </select>

          <select
            onChange={handlePortSelect}
            className={styles.select}
            value={selectedPort}>
            <option value="all">Partenza</option>
            {departurePorts.map((departure, index) => (
              <option key={index} value={departure}>
                {departure}{" "}
              </option>
            ))}
          </select>
        </div>
        {/* ---------------- */}
        <div className={`${styles.section} `}>
          {selectedLocation === "all" ? (
            <>
              <Sections
                location="Mostra tutti"
                places={cardToRender}
                showTitle={false}
              />
              {dataList.length > totalCard && (
                <div className={styles.input}>
                  <input
                    type="button"
                    value="MOSTRA ALTRI"
                    onClick={onAddCard}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              {departurePorts.map((departure) => (
                <Sections
                  location={departure}
                  places={placesData[departure]}
                  showTitle={showTitle}
                />
              ))}
            </>
          )}
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
      </main>
    </>
  );
}
